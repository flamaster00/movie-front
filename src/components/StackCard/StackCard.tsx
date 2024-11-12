import styles from './StackCard.module.scss'

export const StackCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles['image-wrapper']}>
                <img
                    className={styles.image}
                    src='https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg'
                    alt="Matrix" />
            </div>
            <p className={styles.title}>Подборка фильмов по матрице Подборка фильмов по матрице Подборка фильмов по матрице Подборка фильмов по матрице</p>
        </div>
    )
}
