import { Link } from "react-router-dom";
import "./index.module.scss";

const Breadcrumb = () => (
    <div className="breadcrumb" >
        <p><Link to="/">Главная</Link>&gt;Корзина</p>
    </div>
);

export default Breadcrumb;
