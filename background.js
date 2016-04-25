/**
 * Created by shellus on 2016-04-25.
 */
var id = chrome.contextMenus.create({
    "title": "翻译选中文本",
    'contexts': ['selection'],
    "onclick": function (info, tab) {
        var text = info.selectionText;
        chrome.tabs.create({
            'url':'http://translate.google.cn/#en/zh-CN/' + text
        },function (tab) {

        })
    }
});