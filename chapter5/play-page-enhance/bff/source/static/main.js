
document.getElementById('comment_list').addEventListener('click', e => {
    const $bindtarget = e.target.className.indexOf('_praise') != -1 ? e.target :
        (e.target.parentElement.className.indexOf('_praise') != -1 ? e.target.parentElement : null)
    if ($bindtarget) {
        fetch("./api", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "query": "mutation { praise(id: " + $bindtarget.getAttribute("data-id") + ") }"
            })
        }).then(res => res.json())
            .then(res => {
                $bindtarget.querySelector('span').innerHTML = res.data.praise
            })
    }
})
fetch('./api?query={comment{id,avatar,name,isTop,content,publishDate,commentNum,praiseNum}}')

    .then(res => res.json())
    .then(res => {
        document.getElementById("comment_list_num").innerHTML = `(${res.data.comment.length})`;
        document.getElementById('comment_list').innerHTML = res.data.comment.map(item => {
            return `
                        <li class="reJj6Thl_0"><img src="${item.avatar} class="_2273kGdT_0">
                          <div class="_2CG0SquK_0">
                            <div class="_304R4gla_0">
                              <div>
                                <div class="_18Dng5rT_0"><span>${item.name}</span> ${item.isTop ? '<span class="_1bkbsnjg_0">置顶</span>' : ''}</div>
                                <div class="_1H1Z49Dr_0">${item.publishDate}</div>
                              </div>
                              <!---->
                            </div>
                            <div>
                              <div class="_3M6kV3zb_0 _3D2NkqD6_0">${item.content}</div>
                              <div class="_1w8H0ktn_0 _2A421P4G_0">
                                <div class="_2jsFl-X0_0"><i class="iconfont"></i> <span>${item.commentNum}</span></div>
                                <div class="_2P4B1Hdm_0 _praise" data-id="${item.id}"><i class="iconfont"></i> <span class="">${item.praiseNum}</span></div>
                                <!---->
                              </div>
                            </div>
                          </div>
                        </li>
                      `
        })
    })