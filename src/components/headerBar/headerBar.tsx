import { Component } from "solid-js";
import style from "./headerBar.module.scss";
import useStyle from "../../shared/customHooks/utility/style/styleHook";

type Props = {
    title: string
}

const HeaderBar: Component<Props> = (props) => {
    const title = props.title;

    const usestyle = useStyle()

    return <div class={`${usestyle.accent} ${style.headerBar}`}>
            <h1>{title}</h1>
        </div>
    
}

export default HeaderBar;