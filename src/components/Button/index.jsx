export default function Button ({name}) {
    return(
        <button className="font-mono text-lg text-primary font-bold bg-yellow py-3 px-8 hover:border-2 hover:border-yellow hover:text-yellow hover:bg-white duration-200">{name}</button>
    )
}