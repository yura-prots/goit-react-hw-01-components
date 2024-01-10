import PropTypes from "prop-types";

import css from './Statistics.module.css'


export const Statistics = ({title, stats}) => {
    return (
    <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        
        <ul className={css.stats}>
            {stats.map(({id, label, percentage}) => (
                <li className={css.stats__item} key={id}>
                    <span className={css.stats__label}>{label}</span>
                    <span className={css.stats__percentage}>{percentage}%</span>
                </li>
            ))}    
        </ul>
    </section>
  )}

  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
  }