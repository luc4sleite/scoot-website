import classNames from "classnames";

export default function Button ({name, width}) {
    const buttonClasses = classNames(
        "button", width 
    )
    return(
        <button className={`${buttonClasses} font-mono text-lg text-primary font-bold bg-yellow py-3 px-8 hover:border-2 hover:border-yellow hover:text-yellow hover:bg-white duration-200`}>{name}</button>
    )
}