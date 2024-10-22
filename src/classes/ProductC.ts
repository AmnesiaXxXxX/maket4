import { PathLike } from "fs";

interface ProductC {
    id: number;
    count: number;
    name?: string;
    newPrice: number;
    oldPrice: number;
    discount?: number;
    imageUrl?: PathLike;
    rating: number;
}

export default ProductC;