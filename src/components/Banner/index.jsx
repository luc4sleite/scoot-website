import classNames from "classnames";

export default function Banner({background, children}) {
    const bannerClasses = classNames(
        'banner', background
    );
  return (
    <div className={`flex items-center justify-center h-[160px] ${bannerClasses}`}>
        <h1 className="text-white text-[40px] tracking-[-1.79px] font-bold">{children}</h1>
    </div>
  )
}
