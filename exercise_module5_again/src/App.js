import logo from './logo.svg';
import './App.css';
function App() {
    const posts = [
        {
            "title": "5 Best Crypto Performers During The 2022 Market Flop",
            "slug": "5-best-crypto-performers-during-the-2022-market-flop",
            "category": "Crypto News",
            "updatedAt": "21 hours ago"
        },
        {
            "title": " Top crypto funding stories of 2022  ",
            "slug": "top-crypto-funding-stories-of-2022",
            "category": "New Year Special",
            "updatedAt": "a day ago"
        },
        {
            "title": " 2023 will see the death of play-to-earn gaming ",
            "slug": "2023-will-see-the-death-of-playtoearn-gaming",
            "category": " Opinion",
            "updatedAt": "a day ago"
        },
        {
            "title": " US lawmakers under pressure following FTX collapse: Report  ",
            "slug": "us-lawmakers-under-pressure-following-ftx-collapse-report",
            "category": " News",
            "updatedAt": "2 days ago"
        },
        {
            "title": "A Crypto Holiday Special: Past, Present, And Future With Material Indicators",
            "slug": "a-crypto-holiday-special-past-present-and-future-with-material-indicators",
            "category": "Interviews",
            "updatedAt": "2 days ago"
        }
    ]

    return (
        <>
            <div className="container">
                <h2 className="text-center">List Posts</h2>
                <table className="table">
                    <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>TIME</th>
                    </tr>
                    </thead>
                    <tbody className="table-secondary">
                    {
                        posts.map((post, index)=>(
                            <tr>
                                <td>{index+1}</td>
                                <td className="text-primary">{post.title}</td>
                                <td>{post.category}</td>
                                <td>{post.updatedAt}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default App;
