const stripHTMLTags = (element: string): string => {
    return element.replace(/<[^>]*>/g, '');
}

export default stripHTMLTags;