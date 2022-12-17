export const Statistics = ({title, stats } ) => {
    return (
        <section className="statistics">
            {title && <h2>{title}</h2>}

            <ul className="stat-list">
                {stats.map( e => (
                    <li className="item" key={e.id}>
                        <span className="label">{e.label}</span>
                        <span className="percentage">{e.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}