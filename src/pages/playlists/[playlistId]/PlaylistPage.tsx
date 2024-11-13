import { Navbar } from '@/components/Navbar/Navbar'
import styles from './PlaylistPage.module.scss'
import { Playlist } from '@/components/Playlist/Playlist'

export const PlaylistPage = () => {
    return (
        <>
            <Navbar />
            <main className={styles.wrapper}>
                <section className={styles.info}>
                    <h1>Название подборки</h1>
                    <p>Краткое описание</p>
                    <span>Автор</span>

                </section>
                <section>
                    <Playlist />
                </section>
            </main>
        </>
    )
}