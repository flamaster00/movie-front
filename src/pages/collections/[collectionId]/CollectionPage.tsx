import styles from './CollectionPage.module.scss'

export const CollectionPage = () => {
    return (
        <>
            <main className={styles.wrapper}>
                <section className={styles.info}>
                    <h1>Название подборки</h1>
                    <p>Краткое описание</p>
                    <span>Автор</span>

                </section>
                <section>
                </section>
            </main>
        </>
    )
}