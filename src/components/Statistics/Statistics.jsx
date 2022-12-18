import PropTypes from "prop-types";
import styles from './/Statistics.module.css'

export const Statistics = ({ title="Upload stats", stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2>{title}</h2>}

            <ul className={styles.stat_list}>
                {stats.map( e => (
                    <li 
                    style={{
                        backgroundColor:getRandomHexColor(),
                      }}
                    className={styles.item} key={e.id}>
                        <span className="label">{e.label}</span>
                        <span className="percentage">{e.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}