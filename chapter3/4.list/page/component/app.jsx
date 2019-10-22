const React = require('react');
const ColumnItem = require('./column_item')

module.exports = class App extends React.Component {

    render() {
        return (
            <div>
                <div className="_1o6EOwiF_0">
                    <div className="_3HUryTHs_0">
                        <a className="_1kRLIDSR_0">上新</a>
                        <a className="_1kRLIDSR_0">订阅数</a>
                        <a className="_1kRLIDSR_0">价格
                            <span className="_1Yk9PA11_0">
                                <i className="iconfont _2jewjGCJ_0"></i>
                                <i className="iconfont _38FM8KCt_0"></i>
                            </span>
                        </a>
                        <a className="_1kRLIDSR_0">活动</a>
                    </div>
                    <span>{this.props.columns.length}个课程</span>
                </div>
                {this.props.columns.map(column => {
                    return (
                        <ColumnItem column={column} key={column.id} />
                    )
                })}
                <div><span>— 没有更多了 —</span></div>
            </div>
        )
    }
}

// <div>
// ${courses.map(course=> {
// return `
// <div>
//     <div>
//         <a data-seo="" href="${course.introURL || 'javascript:'}">
//             <img src="${course.picture}" alt="" />
//         </a>
//     </div>
//     <div>
//         <div>
//             <div>
//                 <h2>${course.topic}</h2>
//                 <p>${course.lessonNum}讲 <em>|</em> ${course.subscriberNum}人已学习</p>
//             </div>
//             <div>
//                 ${course.author} ${course.title}
//             </div>
//         </div>
//         <div>
//             <ul>
//                 ${course.lessons.map(lesson=> {
//                 return `
//                 <li>
//                     <a href="${lesson.playURL || 'javascript:'}">
//                         ${lesson.isFree ? `<span>免费</span>` : ''}
//                         ${lesson.title}
//                     </a>
//                 </li>
//                 `
//                 })}
//             </ul>
//         </div>
//         <div>
//             <p>
//                 ${course.discount ? `<span>限时 ¥${course.discount}</span>` : ''} <s>原价 ¥${course.price}</s>
//             </p>
//             <div>
//                 <button>立即订阅</button>
//             </div>
//         </div>
//     </div>
// </div>
// `
// })}
// </div>