import {Component} from "react";

const category = [
    "Crypto News",
    "New Year Special",
    "Opinion",
    "News",
    "Interviews"
]

const posts = [
    {
        "id": 1,
        "title": "5 Best Crypto Performers During The 2022 Market Flop",
        "slug": "5-best-crypto-performers-during-the-2022-market-flop",
        "category": "Crypto News",
        "content": "The exuberant peaks of the crypto business in 2022 fell into an extended crypto winter and left many of the sector’s top companies belly up.The aftermath of the shutdown of several large cryptocurrency exchanges has made concerns about liquidity and solvency a big topic of conversation throughout the market. At the beginning of the year, the total market capitalization of all cryptocurrencies was estimated to be $2.2 trillion. By the end of 2022, this amount would fall below $800 billion. Therefore, this shows a great deal about the events of the period. As 2022 comes to a close, we take a quick look at the five best-performing cryptocurrencies of the year.",
        "updatedAt": "21 hours ago"
    },
    {
        "id": 2,
        "title": "Top crypto funding stories of 2022",
        "slug": "top-crypto-funding-stories-of-2022",
        "category": "New Year Special",
        "content": "2022 was a watershed year for crypto venture capital, as investors poured tens of billions of dollars into blockchain-focused startups despite the overwhelmingly bearish trend in asset prices. Is the VC-dominated crypto funding model good for the industry? Only time will tell. Cointelegraph Research is still in the process of tallying all the funding figures for the year, but 2022 easily outpaced all other years in terms of total capital raised and deals completed. VC inflows were above $14 billion in each of the first two quarters before receding to just under $5 billion in the third quarter — still an impressive tally given the industry-wide contagion sparked by the sudden collapses of Celsius, Three Arrows Capital, Genesis, BlockFi and FTX, among others. Against this backdrop, we’ve compiled a list of some of the biggest funding stories of 2022.",
        "updatedAt": "a day ago"
    },
    {
        "id": 3,
        "title": "2023 will see the death of play to earn gaming",
        "slug": "2023-will-see-the-death-of-play-to-earn-gaming",
        "category": "Opinion",
        "content": "An environment has been created in which the players are not all that interested in games themselves, which is a strange state of affairs for a gaming industry to find itself in. More and more of the players are, in reality, investors who want returns on investment. The current structure creates the wrong kind of incentives and this is one of the reasons why the system is not working as it should. I would argue that DeFi Kingdom​s​, which is one of the better-known play-to-earn blockchain games out there, has been screwing with its tokenomics relentlessly by creating perverse incentives. By now, generally speaking, the token market is in a downtrend and the speculative trading market is dead. An industry can survive for a certain amount of time on promise, expectation and unjustified hype. But, it can only do so for so long. Eventually, people begin to notice that they haven’t received what they have been promised. Patience starts to wear thin. They get angry, they get frustrated and they begin to withdraw. This begins as a trickle of the savviest players, but that can soon become a flood.",
        "updatedAt": "a day ago"
    },
    {
        "id": 4,
        "title": "US lawmakers under pressure following FTX collapse: Report",
        "slug": "us-lawmakers-under-pressure-following-ftx-collapse-report",
        "category": "News",
        "content": "Legislators in the United States seem to be reevaluating the crypto industry and its regulatory needs in light of FTX’s collapse. According to the Wall Street Journal, since the crypto exchange filed for bankruptcy in November, lawmakers have been under pressure to set a new regulatory framework for cryptocurrencies. Several proposals are in the works that would apply existing banking, securities and tax rules to cryptocurrencies, and lawmakers are calling on the Securities and Exchange Commission (SEC) to adopt an aggressive approach to the crypto market. In a December House hearing, Rep. Jake Auchincloss, who is also a member of the bipartisan Congressional Blockchain Caucus, reportedly noted that “it’s time for the blockchain investors and entrepreneurs to build things that matter or to lose more credibility,” adding that in 14 years crypto has only delivered “white papers and podcasts.”",
        "updatedAt": "2 days ago"
    },
    {
        "id": 5,
        "title": "A Crypto Holiday Special: Past, Present, And Future With Material Indicators",
        "slug": "a-crypto-holiday-special-past-present-and-future-with-material-indicators",
        "category": "Interviews",
        "content": "2022 is coming to an end, and our staff at Bitcoinist decided to launch this Crypto Holiday Special to provide some perspective on the crypto industry. We will talk with multiple guests to understand this year’s highs and lows for crypto. In the spirit of Charles Dicken’s classic, “A Christmas Carol,” we’ll look into crypto from different angles, look at its possible trajectory for 2023 and find common ground amongst these different views of an industry that might support the future of finances. Over the last week, we spoke with institutions about their perception of 2022 and their outlook for the coming months. We’ll begin our experts round with Material Indicators, a market data, and analytics firm dedicated to building trading tools for the nascent sector.",
        "updatedAt": "2 days ago"
    }
]

class Posts extends Component {

    state = {
        posts: [...posts],
        post: {},
        showFormCreateAndUpdate: {
            action: "CREATE",
            showButtonSave: true,
            showButtonEdit: false,
        }
    }

    handleConvertSlug = (e) => {
        const {name, value} = e.target;
        this.setState(
            {
                post: {
                    ...this.state.post,
                    [name]: value,
                    slug: value.trim().toLocaleLowerCase().replaceAll(" ", "-")
                }
            }
        )
    }

    handleInputContent = (e) => {
        const {name, value} = e.target;
        this.setState({post: {...this.state.post, [name]: value}})
    }

    handleInputCategory = (e) => {
        const {name, value} = e.target;
        this.setState({post: {...this.state.post, [name]: value}})
    }


    handleCreate = () => {
        this.setState(
            {
                ...this.state,
                posts: [
                    ...this.state.posts,
                    {
                        ...this.state.post,
                        updatedAt: new Date().toLocaleDateString(),
                        id: this.state.posts.length + 1
                    }
                ],
                post: {
                    id: "",
                    title: "",
                    category: "",
                    content: "",
                    updatedAt: "",
                    slug: ""
                }
            }
        )
    }

    handleGetInform = (postEdit) => {
        this.setState(
            {
                post: postEdit,
                showFormCreateAndUpdate: {
                    action: "UPDATE",
                    showButtonSave: false,
                    showButtonEdit: true,
                }
            }
        )
    }

    handleEdit = () => {
        const newPosts = this.state.posts.map(post => {
            if (post.id === this.state.post.id) {
                console.log(this.state.post);
                this.state.post.updatedAt = new Date().toLocaleDateString();
                return {...this.state.post};
            } else {
                return post;
            }
        })

        this.setState(
            {
                posts: [
                    ...newPosts
                ],
                post: {
                    id: "",
                    title: "",
                    category: "",
                    content: "",
                    updated: "",
                    slug: ""
                },
                showFormCreateAndUpdate: {
                    action: "CREATE",
                    showButtonSave: true,
                    showButtonEdit: false,
                }
            }
        )
    }

    render() {
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
                            <th>ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="table-secondary">
                        {
                            this.state.posts.map((post, index) => (
                                <tr key={post.id}>
                                    <td>{index + 1}</td>
                                    <td className="text-primary">{post.title}</td>
                                    <td>{post.category}</td>
                                    <td>{post.updatedAt}</td>
                                    <td>
                                        <button className="btn btn-sm btn-secondary rounded-0 me-3" type="button"
                                                onClick={() => this.handleGetInform(post)}>Edit
                                        </button>
                                        <button className="btn btn-sm btn-danger rounded-0" type="button">Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>


                    <div className="row p-0">
                        <div className="col-md-6">
                            <div className="form-control rounded-0">
                                <div className="ps-3 pt-3 fw-bold text-primary">
                                    <h2>{this.state.showFormCreateAndUpdate.action} POST</h2>
                                </div>
                                <div className="row p-3 shadow-lg fw-bold gy-4">
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="title">Title</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control" id="title" name="title"
                                               value={this.state.post.title}
                                               onChange={(e) => this.handleConvertSlug(e)}
                                               required
                                        />
                                    </div>
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="category">Category</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <select className="form-select" id="category" name="category"
                                                value={this.state.post.category}
                                                onChange={(e) => this.handleInputCategory(e)}>
                                            <option value="">---Select---</option>
                                            {
                                                category.map((c, index) => (
                                                    <option key={index}>{c}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="content">Content</label>
                                    </div>
                                    <div className="col-sm-9">
                                    <textarea className="form-control" id="content" name="content"
                                              value={this.state.post.content}
                                              onChange={(e) => this.handleInputContent(e)}/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="slug">Slug</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control" id="slug" name="slug"
                                               value={this.state.post.slug}
                                               readOnly/>
                                    </div>
                                    {
                                        this.state.showFormCreateAndUpdate.showButtonSave
                                        &&
                                        <div className="col-sm-12">
                                            <button className="btn btn-sm btn-primary w-100" type="button"
                                                    onClick={this.handleCreate}>Save
                                            </button>
                                        </div>
                                    }
                                    {
                                        this.state.showFormCreateAndUpdate.showButtonEdit
                                        &&
                                        <div className="col-sm-12">
                                            <button className="btn btn-sm btn-primary w-100 mt-3" type="button"
                                                    onClick={this.handleEdit}>Save changes
                                            </button>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Posts;