import React, { useState } from 'react';
import { Card, ResourceList, ResourceItem, Thumbnail, TextStyle, Modal, TextContainer } from '@shopify/polaris';
import { Markup } from 'interweave';

const ProductList = (props) => {
    const { products } = props;

    const [active, setActive] = useState(false);
    const [pid, setID] = useState(0);

    const handleChange = () => setActive(!active);
    const deleteTitle = `Delete the product with Id:${pid}`

    if(!products || products.length == 0){
        return <Card><p>No Products Available</p></Card>
    }
 
    return (
        <>
            <Modal
                open={active}
                onClose={handleChange}
                title={deleteTitle}
                primaryAction={{
                    content: 'Delete',
                    onAction: () => {
                        fetch(`/deleteProduct?id=${pid}`).then(res => console.log(res))
                    },
                }}
                secondaryActions={[
                {
                    content: 'Cancel',
                    onAction: handleChange,
                },
                ]}
            >
                <Modal.Section>
                <TextContainer>
                    <p>
                        Are you sure you want to delete?
                    </p>
                </TextContainer>
                </Modal.Section>
            </Modal>
            <Card>
                <ResourceList
                    resourceName={{singular: 'product', plural: 'products'}}
                    items={products}
                    renderItem={(product) => {
                    const {id, title, body_html} = product;
                    const url = product.image.src;
                    const media = <Thumbnail product source={url} alt={title} />;

                        return (
                            <ResourceItem
                                id={id}
                                title={title}
                                media={media}
                                accessibilityLabel={`View details for ${title}`}
                                shortcutActions={{
                                    content: 'Delete',
                                    onAction: () => {
                                        setID(id);
                                        handleChange();
                                    }
                                }}
                                >
                                <h3>
                                    <TextStyle variation="strong">{title}</TextStyle>
                                </h3>
                                <Markup content={body_html}></Markup>
                            </ResourceItem>
                        );
                    }}
                />
            </Card>
        </>
    )
}

export default ProductList;