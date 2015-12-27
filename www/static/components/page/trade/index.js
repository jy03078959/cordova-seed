define("components/page/trade/index",function(t,s,a){var i=t("vue.js"),n=t("components/common/BasePage.js");a.exports=i.extend({mixins:[n],className:"trade",template:'<div id="trade" class="content">\n    <div class="pageContent">\n        <div class="buttons-tab">\n            <span class="tab-link button" v-touch:tap="tabKey=\'autobill\'" :class="[tabKey==\'autobill\'?\'active\':\'\']">\n                智能台账\n                <!--<span class="badge">2</span>-->\n            </span>\n            <span class="tab-link button" v-touch:tap="tabKey=\'salebill\'" :class="[tabKey==\'salebill\'?\'active\':\'\']">\n                交易记录\n            </span>\n            <span class="tab-link button" v-touch:tap="tabKey=\'waitbill\'" :class="[tabKey==\'waitbill\'?\'active\':\'\']">\n                待处理\n            </span>\n        </div>\n        <div class="tab_content">\n            <div class="tabs">\n                <div  class="tab" :class="[tabKey==\'autobill\'?\'active\':\'\']">\n                    <li v-for="list in lists.autobill.lists"  v-touch:tap="touch($event)" class="item-content item-link">\n                        <div class="leftWarp">\n                            <div class="imgWarp">\n                                <div class="btype">{{btype[list.bill_type]}}</div>\n                                <div class="rate">{{list.interest_rate}}%</div>\n                                <div class="fdate">{{list.future_date}}</div>\n                            </div>\n                        </div>\n                        <div class="rightWarp">\n                            <div class="descWarp">\n                                <div class="left">\n                                    <span class="sum">{{list.total_sum|moneyFormat}}万</span>/<span class="IDbnum">{{list.total_bill_num}}张</span>\n                                </div>\n                                <div class="right">\n                                    <span class="ttype">{{ttype[list.bill_type]}}</span>\n                                </div>\n                            </div>\n                            <div class="descWarp">\n                                <div class="left">\n                                    <span class="holiday">加添情况:{{holiday[list.holiday]}}</span>\n                                </div>\n                                <div class="right">\n                                    <span class="tdate">{{list.create_time|datetime \'yyyy-mm-dd\'}}</span>\n                                </div>\n                            </div>\n                            <div class="descWarp">\n                                <div class="left">\n                                    <span>交易对手:{{list.target_name}}</span>\n                                </div>\n                                <div class="right">\n                                    <span>{{list.target_bank}}</span>\n                                </div>\n                            </div>\n                            <div class="descWarp">\n                                <div class="scrollWarp">\n\n                                    {{list.note}}\n                                </div>\n                            </div>\n                        </div>\n                    </li>\n\n                </div>\n                <div  class="tab" :class="[tabKey==\'salebill\'?\'active\':\'\']">\n                    <li v-for="list in lists.salebill.lists"  v-touch:tap="touch($event)" class="item-content item-link">\n\n                    <div class="leftWarp">\n                        <div class="imgWarp">\n                            <div class="btype">{{btype[list.bill_type]}}</div>\n                            <div class="rate">{{list.interest_rate}}%</div>\n                            <div class="fdate">{{list.future_date}}</div>\n                        </div>\n                    </div>\n                    <div class="rightWarp">\n                        <div class="descWarp">\n                            <div class="left">\n                                <span class="sum">{{list.total_sum|moneyFormat}}万</span>/<span class="IDbnum">{{list.total_bill_num}}张</span>\n                            </div>\n                            <div class="right">\n                                <span class="ttype">{{ttype[list.bill_type]}}</span>\n                            </div>\n                        </div>\n                        <div class="descWarp">\n                            <div class="left">\n                                <span class="holiday">加添情况:{{holiday[list.holiday]}}</span>\n                            </div>\n                            <div class="right">\n                                <span class="tdate">{{list.create_time|datetime \'yyyy-mm-dd\'}}</span>\n                            </div>\n                        </div>\n                        <div class="descWarp">\n                            <div class="left">\n                                <span>交易对手:{{list.target_name}}</span>\n                            </div>\n                            <div class="right">\n                                <span>{{list.target_bank}}</span>\n                            </div>\n                        </div>\n                        <div class="descWarp">\n                            <div class="scrollWarp">\n\n                                {{list.note}}\n                            </div>\n                        </div>\n                    </div>\n                    </li>\n\n                </div>\n                <div  class="tab" :class="[tabKey==\'waitbill\'?\'active\':\'\']">\n                    <div class="bar bar-header-secondary">\n                        <div class="searchbar">\n                            <a class="searchbar-cancel">Cancel</a>\n                            <div class="search-input">\n                                <label class="icon icon-search" for="search"></label>\n                                <input type="search" id=\'search\' placeholder=\'input some query...\'/>\n                            </div>\n                        </div>\n                    </div>\n                   <li v-for="list in lists.waitbill.lists"  v-touch:tap="touch($event)" class="item-content item-link">\n\n                    <div class="waitItem">\n                            <div class="itemOne">\n                                <div class="left email"></div>\n                                <div class="right btime">{{list.create_time | datetime \'yyyy-mm-dd\'}}</div>\n                            </div>\n                            <div class="itemOne">\n                                <div class="left price">\n                                    金额:{{list.total_sum|moneyFormat}}/{{list.total_bill_num}}张\n                                </div>\n                                <div class="right btype">{{btype[list.bill_type]}}</div>\n\n                            </div>\n                            <div class="etitle">\n                                {{list.title}}\n                            </div>\n                            <div class="note">\n                                {{list.note}}\n                            </div>\n                        </div>\n                    </li>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n',pageName:"范票",needMainMenu:!0,data:function(){return{tabKey:"autobill",btype:Config.btype,ttype:Config.ttype,holiday:Config.holiday,lists:{autobill:{lists:[]},salebill:{lists:[{id:1,user_id:1,total_interest:16599596.66,total_paid:719721895.54,total_sum:736321492.2,interest_rate:4.99,bill_type:0,transaction_type:1,target_name:"",target_bank:"",holiday:0,three_days_free:0,total_bill_num:5,transaction_date:1234567890,future_date:0,status:0,create_time:1234567890,inbox_time:1234567890,title:"20150115招商北京—民生温州利息清单（7.36亿银）",note:"别忘了"}]},waitbill:{lists:[{id:1,user_id:1,total_interest:16599596.66,total_paid:719721895.54,total_sum:736321492.2,interest_rate:4.99,bill_type:0,transaction_type:1,target_name:"",target_bank:"",holiday:0,three_days_free:0,total_bill_num:5,transaction_date:1234567890,future_date:0,status:0,create_time:1234567890,inbox_time:1234567890,title:"20150115招商北京—民生温州利息清单（7.36亿银）",note:"别忘了"}]}}}},ready:function(){var t=this;Server.ajax({action:"list",type:"GET",data:{},needLoading:!0,success:function(s){t.lists.autobill.lists=s}})},attached:function(){var t=this;t.ema.fire("header.change",{show:!0,title:t.$options.pageName,canBack:!1})},methods:{touch:function(t){return console.log(t),t.srcEvent.stopPropagation(),t.srcEvent.preventDefault(),app.$options.jump("detailBill"),!1}}})});