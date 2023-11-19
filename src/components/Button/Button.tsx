import type { ButtonProps } from ".";
import clsx from "../../_utils/clsx";

/**
 * 按钮通常用于传达用户可以执行的操作。它们通常分布在用户界面的各个位置，比如：
 * 弹窗、表单、卡片、工具栏
 */
const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, color, children }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{ color }}
            className={clsx("p-4 py-6 text-xs", {
                "text-lg": false,
            })}
        >
            {children}
        </button>
    );
};

export default Button;
