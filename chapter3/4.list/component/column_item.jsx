const React = require('react');

module.exports = class ColumnItem extends React.Component {
    render() {
        const column = this.props.column
        return (
            <div className="_20Cq3Rn7_0">
                <div className="_2sej44xY_0">
                    <a data-seo="" href="//time.geekbang.org/course/intro/237">
                        <img src={column.column_cover} alt="" className="_1miPDP4s_0" />
                        <span className="_1wLiyUbR_0"></span>
                    </a>
                </div>
                <div className="_3M3E-ESU_0">
                    <div className="_3gQBs_6X_0">
                        <div className="_3G50nw0p_0">
                            <h2>{column.column_title}</h2> <p>{column.column_unit} <em>|</em> {column.sub_count}人已学习</p>
                        </div>
                        <div className="_33lENDr7_0">{column.author_name} {column.author_intro}</div>
                    </div>
                    <div className="_14n6BJoa_0">
                        <ul>
                            {
                                column.articles.map((article, index) => {
                                    return (
                                        <li key={article.id}>
                                            <a href="" className={article.is_video_preview ? "_10vvBdC9_0" : ''}>
                                                {article.is_video_preview ? <span className="_ffA7FdL_0">免费</span> : ''}
                                                {'0' + index + ' | ' + article.article_title}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="_2zRFFX7P_0">
                        <p className="_14cxbu2p_0"><span className="_1BSc9YvC_0">限时 ¥{column.column_price / 100}</span>{column.column_price_market ? <s className="_1EwQIhcU_0">原价 ¥{column.column_price_market / 100}</s> : ''}</p>
                        <div className="_1NLR_mQs_0"><button className="_272_Yrle_0">立即订阅</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}