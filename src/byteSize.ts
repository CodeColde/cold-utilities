const byteSize = (str: any): number => new Blob([str]).size;

export default byteSize;