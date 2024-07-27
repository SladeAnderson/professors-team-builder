import { Component } from "solid-js";
import styles from "./teamPicker.module.scss";
import useStyle from "../../shared/customHooks/utility/style/styleHook";


type props = {

};

const TeamPicker:Component<props> = (props) => {

    const theme = useStyle()


    return <div class={`${theme.tertiary} ${styles.outer}`}>
        
        <div class={`${styles.genFlexBox}`}>
            <div class={`${styles.generationSel}`}>
                <select name="genPicker">
                    <option value="">generation 1 (red and blue)</option>
                    <option value="">generation 2 (gold and silver)</option>
                    <option value="">generation 3 (ruby and Sapphire)</option>
                    <option value="">generation 4 (Diamond and Pearl)</option>
                    <option value="">generation 5 (black and white)</option>
                    <option value="">generation 6 (Ω Ruby n α Sapphire)</option>
                    <option value="">generation 7 (sun and moon)</option>
                    <option value="">generation 8 (Sword and Sheild)</option>
                </select>
            </div>
            <div>
                <button>Ok</button>
            </div>
        </div>


    </div>
}

export default TeamPicker;