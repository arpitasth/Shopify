require('isomorphic-fetch');
const dotenv = require('dotenv');
const koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

const Router = require('@koa/router');
const axios = require('axios');
dotenv.config();

const charityModel = require('./server/models/charity');

const port = parseInt(process.env.PORT) || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { SHOPIFY_API_KEY, SHOPIFY_API_SECRET_KEY } = process.env;

app.prepare().then(() => {
    const server = new koa();
    const router = new Router();

    server.use(session({ secure: true, sameSite: 'none'}, server));
    server.keys = [SHOPIFY_API_SECRET_KEY];

    server.use(
        createShopifyAuth(
            {
                apiKey: SHOPIFY_API_KEY,
                secret: SHOPIFY_API_SECRET_KEY,
                scopes: ['read_products', 'write_products'],
                async afterauth(ctx) {
                    const { shop, accessToken } = ctx.session;
                    ctx.redirect(`https://${shop}/admin/apps`);
                }
            }
        )
    );

  
    server.use(verifyRequest());

    router.get('/getProducts', verifyRequest(), async (ctx, res) => {
        const { shop, accessToken } = ctx.session;
        const url = `https://${shop}/admin/api/2021-04/products.json`;
        const shopifyHeader = (token) => ({
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': token
        })
        console.log('acessToken', accessToken);
        const getProducts = await axios.get(url, { headers: shopifyHeader(accessToken)});
        ctx.body = getProducts.data;
        ctx.statusCode = 200;

    });

    router.get('/getCharities', verifyRequest(), async (ctx, res) => {
        const charityData = await charityModel.getAllCharities();
        ctx.body = charityData;
        ctx.statusCode = 200;
    });

    router.get('/deleteProduct', verifyRequest(), async (ctx, res) => {
        const { shop, accessToken } = ctx.session;
        const productId = ctx.query.id;
        const url = `https://${shop}/admin/api/2021-04/products/${productId}.json`;
        const shopifyHeader = (token) => ({
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': token
        })

        const getProducts = await axios.delete(url, { headers: shopifyHeader(accessToken)})
                            .then(res => console.log(res))
                            .catch(err => console.log(err));
                            
        ctx.statusCode = 200;
    });

    server.use(router.routes());
    server.use(router.allowedMethods());

    server.use(async(ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
        ctx.res.statusCode = 200;
        return;
    });

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`); 
    })
});
