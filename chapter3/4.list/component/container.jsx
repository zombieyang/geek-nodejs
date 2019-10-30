const React = require('react');
const ColumnItem = require('./column_item.jsx')

module.exports = class Container extends React.Component {

    render() {
        return (
            <div className="_2lx4a-CP_0">
                <div className="_3KjZQbwk_0">
                    <div className="kcMABq6U_0">
                        <span>课程：</span>
                        <a className="_2TWCBjxa_0" onClick={this.props.filt.bind(this, 0)}>全部</a>
                        <a className="_2TWCBjxa_0" onClick={this.props.filt.bind(this, 1)}>专栏</a>
                        <a className="_2TWCBjxa_0" onClick={this.props.filt.bind(this, 2)}>视频课程</a>
                        <a className="_2TWCBjxa_0" onClick={this.props.filt.bind(this, 3)}>微课</a>
                    </div>
                </div>
                <div className="_3hVBef3W_0">
                    <div className="_3S9KmBtG_0">
                        <div className="_1o6EOwiF_0">
                            <div className="_3HUryTHs_0">
                                <a className="_1kRLIDSR_0" onClick={this.props.sort.bind(this, 1)}>上新</a>
                                <a className="_1kRLIDSR_0" onClick={this.props.sort.bind(this, 2)}>订阅数</a>
                                <a className="_1kRLIDSR_0" onClick={this.props.sort.bind(this, 3)}>价格
                                    <span className="_1Yk9PA11_0">
                                        <i className="iconfont _2jewjGCJ_0"></i> <i className="iconfont _38FM8KCt_0"></i>
                                    </span>
                                </a>
                            </div>
                            <span className="JfgzzksA_0">{this.props.columns.length}个课程</span>
                        </div>
                        <div>
                            {this.props.columns.map(column => {
                                return (
                                    <ColumnItem column={column} key={column.id} />
                                )
                            })}
                        </div>
                        <div className="OjL5wNoM_0"><span>— 没有更多了 —</span></div>
                    </div>
                </div>
            </div>

        )
    }
}
