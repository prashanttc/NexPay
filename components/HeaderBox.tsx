import TotalBalanceBox from "./TotalBalanceBox"


const HeaderBox = ({ type = "title", user, subtext, title }: HeaderBoxProps) => {
    return (
        <div className="header-box">
            <h1 className="header-box-title">
                {title}
                {type === "greeting" && (
                    <span className="text-bankGradient">
                        &nbsp;{user}
                    </span>
                )}
            </h1>
            <p className="header-box-subtext mb-10">
                {subtext}
            </p>
            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12500.45}
            />
        </div>
    )
}

export default HeaderBox
