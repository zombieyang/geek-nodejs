// 以下是服务端代码（指的是比Node.js更后端的，提供数据服务的服务端）


const fs = require('fs')
const protobuf = require('protocol-buffers');
const schemas = protobuf(fs.readFileSync(`${__dirname}/../detail-service/proto/detail.proto`));
const RPC = require('../detail-service/rpc-channel/server')

// 假数据
const listData = {
    column: {
        id: 232,
        column_cover: "https://static001.geekbang.org/resource/image/42/78/42db8ef7b28bcdc26410141dd97b8178.jpg",
        column_title: "Node.js开发实战",
        column_subtitle: "带你开发一个完整的Node.js项目",
        author_name: "杨浩",
        author_intro: "腾讯高级工程师",
        column_intro: `<h2>课程背景</h2><p>Node.js 拥有广大的 JavaScript 程序员基础并且完全开源，所以它拥有一个强大的开发者社区。依靠繁荣的社区力量，现在已经发展出成熟的技术体系与庞大的生态。它被广泛地用在 Web 服务、开发工作流、客户端应用等诸多领域。其中，在 Web 服务开发这个领域，业界对 Node.js 的接受程度最高。</p><p>对于很多前端开发者来说，掌握 Node.js 的基础知识并不难，难点在于如何按照后端工程师的思维，基于 Node.js 来一步步构建项目，其中涉及诸如 RPC 调用、系统运维以及进程管理等前端工程师较少涉及到的领域。</p><p>因此，本课程站在一个前端工程师的角度，讲解如何基于 Node.js 开发一个完整的项目，从一开始的技术预研再到实际开发、性能优化以及最终的框架架构搭建和工程化建设，带你完整体验一遍前端工程师使用 Node.js进行项目开发会碰到的各种常见场景和技术难点，学完课程之后，你将能够熟练运用 Node.js 进行大型项目的设计和开发。</p><h2>讲师简介</h2><p>杨浩，腾讯高级工程师。之前曾在腾讯视频负责 Web 端的相关工作，设计并完成了腾讯视频整站大部分页面的 Node.js 化。</p><p>腾讯视频是从 2015 年开始使用 Node.js 对整站进行改造的，杨浩与同事一起从零开始一步一步把整个 Node.js 的开发运维步骤打通，搭建了一个运行于后台服务和浏览器前端之间的 Node.js 中间层用作 SSR（Server Side Rendering），以提高搜索引擎抓取的效果以及首屏展现的速度。</p><p>在 2018 年由 InfoQ 举办的 ArchSummit 全球架构师峰会深圳站上，杨浩也对在腾讯视频进行 Node.js 改造这一经历做了公开分享：</p><p><a href="https://time.geekbang.org/dailylesson/detail/100016617">https://time.geekbang.org/dailylesson/detail/100016617</a></p><h2>课程收获</h2><ol><li>Node.js 开发必备基础知识；</li><li>使用 Node.js 构建 BFF 层；</li><li>一个完整项目的开发重构实战；</li><li>性能优化和工程化建设核心方法。</li></ol><p><img src="https://static001.geekbang.org/resource/image/99/9b/995176c4b4cb6c197414430998ad8c9b.jpg" alt="" /></p><h2>更新频率</h2><ol><li>9月18日上线 1-8 讲，9月25日开始固定为每周三更新。</li><li>全部课程预计将于 12 月 11 日前更新完毕。</li></ol><h2>如何在电脑端观看视频</h2><ol><li>用浏览器访问  <a href="https://time.geekbang.org">https://time.geekbang.org</a> ，登录极客时间账号；</li><li>然后在“讲堂”板块选择“视频课程”标签，点击相应的视频课程即可观看。</li></ol><h2 class="js-audit">订阅须知</h2><ol class="js-audit"><li> 本课程为视频课程，共55讲，订阅成功后即可通过“极客时间”App端、小程序端、<a href="https://time.geekbang.org/paid-content">Web端</a>永久观看；</li><li>由于视频内容为虚拟商品，一经订阅，概不退款；</li><li>企业批量购买请点击“<a href="https://time.geekbang.org/column/article/102047?utm_source=geektimeAPP&utm_medium=DingYueXuZhi&utm_campaign=qiyezhanghao">企业充值</a>”了解详情，可支持员工选课，企业支付；</li><li>在课程学习过程中，如有任何问题，请邮件联系 service@geekbang.org。</li><li>戳此<a href="https://promo.geekbang.org/activity/student-certificate?utm_source=app&utm_medium=xiangqingye">申请学生认证</a>，订阅课程一律 5 折。</li></ol>`,
        column_unit: "55讲",
        sub_count: 2915,
        update_frequency: "约550分钟",
        column_price: 12900,
        column_price_market: 12900,
        articles: [{
            id: 0,
            is_video_preview: false,
            article_title: '第一课'
        }]
    },
    recommendColumns: [{
        id: 232,
        column_cover: "https://static001.geekbang.org/resource/image/42/78/42db8ef7b28bcdc26410141dd97b8178.jpg",
        column_title: "Node.js开发实战",
        column_subtitle: "带你开发一个完整的Node.js项目",
        author_name: "杨浩",
        author_intro: "腾讯高级工程师",
        column_intro: `<h2>课程背景</h2><p>Node.js 拥有广大的 JavaScript 程序员基础并且完全开源，所以它拥有一个强大的开发者社区。依靠繁荣的社区力量，现在已经发展出成熟的技术体系与庞大的生态。它被广泛地用在 Web 服务、开发工作流、客户端应用等诸多领域。其中，在 Web 服务开发这个领域，业界对 Node.js 的接受程度最高。</p><p>对于很多前端开发者来说，掌握 Node.js 的基础知识并不难，难点在于如何按照后端工程师的思维，基于 Node.js 来一步步构建项目，其中涉及诸如 RPC 调用、系统运维以及进程管理等前端工程师较少涉及到的领域。</p><p>因此，本课程站在一个前端工程师的角度，讲解如何基于 Node.js 开发一个完整的项目，从一开始的技术预研再到实际开发、性能优化以及最终的框架架构搭建和工程化建设，带你完整体验一遍前端工程师使用 Node.js进行项目开发会碰到的各种常见场景和技术难点，学完课程之后，你将能够熟练运用 Node.js 进行大型项目的设计和开发。</p><h2>讲师简介</h2><p>杨浩，腾讯高级工程师。之前曾在腾讯视频负责 Web 端的相关工作，设计并完成了腾讯视频整站大部分页面的 Node.js 化。</p><p>腾讯视频是从 2015 年开始使用 Node.js 对整站进行改造的，杨浩与同事一起从零开始一步一步把整个 Node.js 的开发运维步骤打通，搭建了一个运行于后台服务和浏览器前端之间的 Node.js 中间层用作 SSR（Server Side Rendering），以提高搜索引擎抓取的效果以及首屏展现的速度。</p><p>在 2018 年由 InfoQ 举办的 ArchSummit 全球架构师峰会深圳站上，杨浩也对在腾讯视频进行 Node.js 改造这一经历做了公开分享：</p><p><a href="https://time.geekbang.org/dailylesson/detail/100016617">https://time.geekbang.org/dailylesson/detail/100016617</a></p><h2>课程收获</h2><ol><li>Node.js 开发必备基础知识；</li><li>使用 Node.js 构建 BFF 层；</li><li>一个完整项目的开发重构实战；</li><li>性能优化和工程化建设核心方法。</li></ol><p><img src="https://static001.geekbang.org/resource/image/99/9b/995176c4b4cb6c197414430998ad8c9b.jpg" alt="" /></p><h2>更新频率</h2><ol><li>9月18日上线 1-8 讲，9月25日开始固定为每周三更新。</li><li>全部课程预计将于 12 月 11 日前更新完毕。</li></ol><h2>如何在电脑端观看视频</h2><ol><li>用浏览器访问  <a href="https://time.geekbang.org">https://time.geekbang.org</a> ，登录极客时间账号；</li><li>然后在“讲堂”板块选择“视频课程”标签，点击相应的视频课程即可观看。</li></ol><h2 class="js-audit">订阅须知</h2><ol class="js-audit"><li> 本课程为视频课程，共55讲，订阅成功后即可通过“极客时间”App端、小程序端、<a href="https://time.geekbang.org/paid-content">Web端</a>永久观看；</li><li>由于视频内容为虚拟商品，一经订阅，概不退款；</li><li>企业批量购买请点击“<a href="https://time.geekbang.org/column/article/102047?utm_source=geektimeAPP&utm_medium=DingYueXuZhi&utm_campaign=qiyezhanghao">企业充值</a>”了解详情，可支持员工选课，企业支付；</li><li>在课程学习过程中，如有任何问题，请邮件联系 service@geekbang.org。</li><li>戳此<a href="https://promo.geekbang.org/activity/student-certificate?utm_source=app&utm_medium=xiangqingye">申请学生认证</a>，订阅课程一律 5 折。</li></ol>`,
        column_unit: "55讲",
        sub_count: 2915,
        update_frequency: "约550分钟",
        column_price: 12900,
        column_price_market: 12900,
    }, {
        id: 232,
        column_cover: "https://static001.geekbang.org/resource/image/42/78/42db8ef7b28bcdc26410141dd97b8178.jpg",
        column_title: "Node.js开发实战",
        column_subtitle: "带你开发一个完整的Node.js项目",
        author_name: "杨浩",
        author_intro: "腾讯高级工程师",
        column_intro: `<h2>课程背景</h2><p>Node.js 拥有广大的 JavaScript 程序员基础并且完全开源，所以它拥有一个强大的开发者社区。依靠繁荣的社区力量，现在已经发展出成熟的技术体系与庞大的生态。它被广泛地用在 Web 服务、开发工作流、客户端应用等诸多领域。其中，在 Web 服务开发这个领域，业界对 Node.js 的接受程度最高。</p><p>对于很多前端开发者来说，掌握 Node.js 的基础知识并不难，难点在于如何按照后端工程师的思维，基于 Node.js 来一步步构建项目，其中涉及诸如 RPC 调用、系统运维以及进程管理等前端工程师较少涉及到的领域。</p><p>因此，本课程站在一个前端工程师的角度，讲解如何基于 Node.js 开发一个完整的项目，从一开始的技术预研再到实际开发、性能优化以及最终的框架架构搭建和工程化建设，带你完整体验一遍前端工程师使用 Node.js进行项目开发会碰到的各种常见场景和技术难点，学完课程之后，你将能够熟练运用 Node.js 进行大型项目的设计和开发。</p><h2>讲师简介</h2><p>杨浩，腾讯高级工程师。之前曾在腾讯视频负责 Web 端的相关工作，设计并完成了腾讯视频整站大部分页面的 Node.js 化。</p><p>腾讯视频是从 2015 年开始使用 Node.js 对整站进行改造的，杨浩与同事一起从零开始一步一步把整个 Node.js 的开发运维步骤打通，搭建了一个运行于后台服务和浏览器前端之间的 Node.js 中间层用作 SSR（Server Side Rendering），以提高搜索引擎抓取的效果以及首屏展现的速度。</p><p>在 2018 年由 InfoQ 举办的 ArchSummit 全球架构师峰会深圳站上，杨浩也对在腾讯视频进行 Node.js 改造这一经历做了公开分享：</p><p><a href="https://time.geekbang.org/dailylesson/detail/100016617">https://time.geekbang.org/dailylesson/detail/100016617</a></p><h2>课程收获</h2><ol><li>Node.js 开发必备基础知识；</li><li>使用 Node.js 构建 BFF 层；</li><li>一个完整项目的开发重构实战；</li><li>性能优化和工程化建设核心方法。</li></ol><p><img src="https://static001.geekbang.org/resource/image/99/9b/995176c4b4cb6c197414430998ad8c9b.jpg" alt="" /></p><h2>更新频率</h2><ol><li>9月18日上线 1-8 讲，9月25日开始固定为每周三更新。</li><li>全部课程预计将于 12 月 11 日前更新完毕。</li></ol><h2>如何在电脑端观看视频</h2><ol><li>用浏览器访问  <a href="https://time.geekbang.org">https://time.geekbang.org</a> ，登录极客时间账号；</li><li>然后在“讲堂”板块选择“视频课程”标签，点击相应的视频课程即可观看。</li></ol><h2 class="js-audit">订阅须知</h2><ol class="js-audit"><li> 本课程为视频课程，共55讲，订阅成功后即可通过“极客时间”App端、小程序端、<a href="https://time.geekbang.org/paid-content">Web端</a>永久观看；</li><li>由于视频内容为虚拟商品，一经订阅，概不退款；</li><li>企业批量购买请点击“<a href="https://time.geekbang.org/column/article/102047?utm_source=geektimeAPP&utm_medium=DingYueXuZhi&utm_campaign=qiyezhanghao">企业充值</a>”了解详情，可支持员工选课，企业支付；</li><li>在课程学习过程中，如有任何问题，请邮件联系 service@geekbang.org。</li><li>戳此<a href="https://promo.geekbang.org/activity/student-certificate?utm_source=app&utm_medium=xiangqingye">申请学生认证</a>，订阅课程一律 5 折。</li></ol>`,
        column_unit: "55讲",
        sub_count: 2915,
        update_frequency: "约550分钟",
        column_price: 12900,
        column_price_market: 12900,
    }]
};

const server = new RPC({
    decodeRequest(buffer) {
        const seq = buffer.readUInt32BE();

        return {
            seq: seq,
            result: schemas.ColumnRequest.decode(buffer.slice(8))
        }
    },
    isCompleteRequest(buffer) {
        const bodyLength = buffer.readUInt32BE(4);

        return 8 + bodyLength
    },
    encodeResponse(data, seq) {
        const body = schemas.ColumnResponse.encode(data);

        const head = Buffer.alloc(8);
        head.writeUInt32BE(seq);
        head.writeUInt32BE(body.length, 4);

        return Buffer.concat([head, body]);
    }
})

server
    .createServer((request, response) => {
        // console.log('server', request);
        response.end(listData);
    })
    .listen(4000);