define("components/page/createBill/index",function(n,i,e){var t=n("vue.js"),l=n("components/common/BasePage.js");n("numSelect/index.js"),e.exports=t.extend({mixins:[l],className:"createBill",template:'<div id="createBill" class="content">\n    <div class="pageContent">\n        <div class="list-block">\n            <ul>\n                <li>\n                    <div class="item-content item-link">\n                        <div class="item-inner">\n                            <div class="item-title label">拟交易模式:</div>\n                            <div class="item-input">\n                                <input  type="text" Jid="transaction_date" placeholder="">\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="item-content item-inner noPadding-right">\n                        <div>\n\n                        票面到期日\n                        </div>\n\n                        <div class="">\n                            <div class="item-link">\n                                <div class="item-inner">\n                                    <div class="item-title label">晚于:</div>\n                                    <div class="item-input">\n                                        <input type="text" placeholder="2015-12-12">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="item-link">\n\n                            <div class="item-inner noAfter">\n                                <div class="item-title label">早于:</div>\n                                <div class="item-input">\n                                    <input type="text" placeholder="">\n                                </div>\n                            </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="item-content item-link">\n                        <div class="item-inner">\n                            <div class="item-title label">票据类型:</div>\n                            <div class="item-input">\n                                <input type="text" placeholder="">\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="item-content item-link">\n                        <div class="item-inner">\n                            <div class="item-title label">总金额:</div>\n                            <div class="item-input">\n                                <input type="text" placeholder="">\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="item-content">\n                        <div class="item-inner">\n                            <div class="name">国股</div>\n                            <c-numselect></c-numselect>\n\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n\n    </div>\n    <div class="bottomWarp">\n        <div class="btn blue">生成清单</div>\n    </div>\n</div>\n',pageName:"清单生成",attached:function(){var n=this;n.ema.fire("header.change",{show:!0,title:n.$options.pageName,canBack:!0})}})});