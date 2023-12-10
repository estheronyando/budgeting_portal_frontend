import React, { createContext} from "react";
const company=[{}]
const mv={ statu: false, user:'', login:true, admin:false, manager:false, name:'', menu:false, company:company, myroute:"dashboard", type:"MY", dislist: true, data:[],lview:true, data1:[]}
const Cstatus = createContext({mcname: mv, setMcname: (auth) => {}})

export default Cstatus;