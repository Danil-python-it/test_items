import { Link } from "react-router-dom"

const NotPage = () => {
    return (
        <main>
            <div className="ContainerMain">
                <h1 className="NotPage"> Страница не найдена.</h1>
                <Link to={'/'}>
                    <div className="ContainerButton">
                        <div>
                            Вернуться на главную
                        </div>
                    </div>
                </Link>
            </div>
        </main>
    )
}

export default NotPage