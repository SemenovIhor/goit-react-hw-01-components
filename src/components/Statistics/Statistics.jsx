export const Statistics = ({ data } ) => {
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                {data.map( e => (
                    <li className="item" key={e.id}>
                        <span className="label">{e.label}</span>
                        <span className="percentage">{e.percentage}%</span>
                    </li>
                ))};
            </ul>
        </section>
    );
};