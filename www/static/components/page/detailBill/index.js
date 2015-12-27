define("components/page/detailBill/index",function(n,t,i){var e=n("vue.js"),l=n("components/common/BasePage.js");i.exports=e.extend({mixins:[l],className:"detailBill",pageName:"清单详情",template:'<div id="detailBill" class="content">\n    <div class="pageContent">\n        <div class="totalInfo">\n           <div class="gardLeft">\n               <div class="item">\n                   国股:100000 <span>4张</span>\n               </div>\n               <div class="item">\n                   国股:100000 <span>4张</span>\n               </div>\n               <div class="item price">\n                   100000 <span>4张</span>\n               </div>\n           </div>\n            <div class="grad-line"></div>\n           <div class="gardRight">\n               <div class="item">\n                   实付:100000\n               </div>\n               <div class="item">\n                   利息:100000\n               </div>\n               <div class="item">\n                   票据类型:电商\n               </div>\n           </div>\n        </div>\n        <div class="list-block">\n            <ul>\n                <li>\n                    <div class="item-content item-link">\n                        <div class="item-inner">\n                            <div class="item-title label">交易日期:</div>\n                            <div class="item-input">\n                                <input  type="text" Jid="transaction_date" placeholder="">\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="item-content item-link">\n                        <div class="item-inner">\n                            <div class="item-title label">交易类型:</div>\n                            <div class="item-input">\n                                <input type="text" placeholder="">\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="item-content item-link">\n                        <div class="item-inner">\n                            <div class="item-title label">加天情况:</div>\n                            <div class="item-input">\n                                <input type="text" placeholder="">\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="item-content item-link">\n                        <div class="item-inner">\n                            <div class="item-title label">交易对手:</div>\n                            <div class="item-input">\n                                <input type="text" placeholder="">\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="item-content item-link">\n                        <div class="item-inner">\n                            <div class="item-title label">利率:</div>\n                            <div class="item-input">\n                                <input type="text" placeholder="">\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="item-content item-link">\n                        <div class="item-inner">\n                            <div class="item-title label">远期日期:</div>\n                            <div class="item-input">\n                                <input type="text" Jid="future_date" placeholder="">\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="item-content item-link">\n                        <div class="item-inner">\n                            <div class="item-title label">备注:</div>\n                            <div class="item-input">\n                                <input type="text" placeholder="">\n                            </div>\n                        </div>\n                    </div>\n                </li>\n\n            </ul>\n        </div>\n        <div class="h1">票据清单</div>\n        <div class="table-responsive">\n            <table class="table">\n                <thead>\n                <tr>\n                    <th>序号</th>\n                    <th>票号</th>\n                    <th>出票日</th>\n                    <th>出票人</th>\n                    <th>收款人</th>\n                    <th>节假日</th>\n                    <th>金额</th>\n                    <th>到期日</th>\n                    <th>承兑人</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                </tr>\n                <tr>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                    <td>Table cell</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n\n    </div>\n    <div class="bottomWarp">\n        <div class="btn blue">生成清单</div>\n    </div>\n</div>\n',data:function(){return{}},ready:function(){var n=this,t={theme:"baoxian",lang:"zh",display:"bottom",dateFormat:"yy/mm/dd",startYear:(new Date).getFullYear()-2,endYear:(new Date).getFullYear(),controls:["date,time"]};n.Jdom.transaction_date.mobiscroll().calendar(t),n.Jdom.future_date.mobiscroll().calendar(t)},attached:function(){var n=this;n.ema.fire("header.change",{show:!0,title:"合同范本",canBack:!0})}})});