// Menu G5.5.2 (frameset/Gecko)
// Last Modified: Oct.315, 2004
// Web Site: yxScripts.com
// Email: m_yangxin@hotmail.com

// Copyright 2003, 2004  Xin Yang   All Rights Reserved.

var yx_ej=false;function yx_ds(f){return f.innerWidth};function yx_dr(f){return f.innerHeight};function yx_di(f){return f.pageXOffset};function yx_dj(f){return f.pageYOffset};function yx_db(l){return l.offsetLeft+(l.offsetParent?yx_db(l.offsetParent):0)};function yx_dq(l){return l.offsetTop+(l.offsetParent?yx_dq(l.offsetParent):0)};function yx_fk(f,x,y,h,gi,cu){var l=yx_fh(f,x,y,gi,cu),ac=h||f.document.body;return ac.appendChild(l)};function yx_gx(f){yx_ej=true};function yx_er(){var dg=this.dg,cl=dg.cl,au=this.au,gh=au.gh,x=this.item;if(gh!=yx_S&&gh!=yx_I){x.onmouseover=yx_fw;x.onmouseout=yx_fu;x.onmousedown=yx_by;x.onclick=yx_ax;if(this.au.dv!=""&&showToolTip==1){x.title=this.au.dv};x.dn=yx_eu;x.item=this}else{x.onmouseover=yx_fx;x.onmouseout=yx_fv;x.onclick=yx_av;x.cl=cl};x.sticky=cl.sticky;this.av=this.item;x.dc=dg.dg==cl?1:0;x.ap=(x.dc||cl.da)?cl.ge:cl.fq;var ee=yx_cj(au.ci);if(ee!=null){this.as=ee.as;this.at=ee.at;this.dq=ee.dq};if(gh==yx_M){this.menu=new yx_ev(cl,this,au)}};function yx_es(){var dg=this.dg,au=this.au,dq=au.ei,gh=au.gh,si=this.fo=yx_da(this),f=yx_cw(dg);if(si.fc.actual&&gh!=yx_S){dg.actual=true};this.item=yx_fk(f,0,0,dg.holder,"inherit",yx_en);if(gh==yx_M||gh==yx_L||gh==yx_C){this.item.className=si.fc.be[dq];if(si.fb!=null){if(si.fb.bc!=""){this.cs=yx_fi(f,"SPAN");this.cs.className=si.fb.be[dq];if(si.fb.text!=""){this.cs.innerHTML=si.fb.text};this.item.appendChild(this.cs)};if(si.fb.bd!=""){this.ct=yx_fi(f,"SPAN");this.ct.className=si.fb.bf[dq];if(si.fb.text2!=""){this.ct.innerHTML=si.fb.text2};this.item.appendChild(this.ct)}};if(gh==yx_M&&si.ff!=null&&si.ff.bc!=""){this.fv=yx_fi(f,"SPAN");this.fv.className=si.ff.be[dq];if(si.ff.text!=""){this.fv.innerHTML=si.ff.text};this.item.appendChild(this.fv)};this.bl=yx_fi(f,si.fc.actual?"NOBR":"SPAN");this.bl.className=si.fa.be[dq];this.bl.innerHTML=au.bl;this.item.appendChild(this.bl)}else if(gh==yx_I){this.item.className=si.fc.bc;this.bl=yx_fi(f,si.fc.actual?"NOBR":"SPAN");this.bl.className=si.fa.bc;this.bl.innerHTML=au.bl;this.item.appendChild(this.bl)}else if(gh==yx_S){var fi=yx_fi(f,"DIV");fi.className=si.fe.bi;fi.appendChild(yx_fj(f,yx_ga.src,1,1,"top"));this.item.appendChild(fi);if(si.fe.ax!=""){var fh=yx_fi(f,"DIV");fh.className=si.fe.ax;fh.appendChild(yx_fj(f,yx_ga.src,1,1,"top"));this.item.appendChild(fh);if(dg.bar){fi.style.cssFloat="left";fh.style.cssFloat="left"}}};this.aw=0;this.ah=0;if(gh!=yx_S){this.aw=Math.max(minimumWidth,yx_em(this));this.ah=Math.max(Math.max(Math.max(this.bl.offsetHeight,this.fv!=null?(this.fv.offsetHeight):0),this.cs!=null?(this.cs.offsetHeight):0),this.ct!=null?(this.ct.offsetHeight):0)}};function yx_et(){var f=yx_cw(this),cl=this.cl;this.style=yx_dd(this);var fd=this.style.fd;this.bar=(this.dg==cl&&cl.bar||this.dg!=cl&&fd.bar)?true:false;this.holder=yx_fk(f,-2000,-2000,null,"hidden",cl.z);this.holder.cz=cl.cz;if(fd.ck!=""){this.holder.className=fd.ck};this.pad=yx_fk(f,0,0,this.holder,"inherit",yx_fy);var x=this.pad;if(fd.bc!=""){x.className=fd.bc};x.onmouseover=yx_fx;x.onmouseout=yx_fv;x.onclick=yx_ay;x.sticky=cl.sticky;x.menu=this;x.cl=cl;x.dc=this.dg==cl?1:0;x.ap=(x.dc||cl.da)?cl.ge:cl.fq;var df=this.df;for(var i=0;i<this.dd;i++){df[i]=new yx_ek(this,this.au.df[i]);df[i].dl()};if(this.actual){for(var i=0;i<this.dd;i++){if(df[i].au.gh!=yx_S){df[i].item.style.width=df[i].aw+"px"}}};var mw=new Array(),mh=new Array(),cc=rc=tw=th=col=row=0;if(this.bar){col=fd.col>0?fd.col:fd.row>0?Math.ceil(this.dd/fd.row):this.dd;row=Math.ceil(this.dd/col);for(var i=0;i<row;i++){mw[i]=0;mh[i]=0};for(var i=0;i<this.dd;i++){if(df[i].au.gh!=yx_S&&mh[rc]<df[i].item.offsetHeight){mh[rc]=df[i].item.offsetHeight};if(++cc==col){cc=0;rc++}};cc=rc=0;for(var i=0;i<this.dd;i++){if(df[i].au.gh!=yx_S){if(df[i].item.offsetHeight<mh[rc]){df[i].item.style.height=(df[i].ah+mh[rc]-df[i].item.offsetHeight)+"px"};mw[rc]+=df[i].item.offsetWidth};if(++cc==col){cc=0;rc++}};cc=rc=0;for(var i=0;i<this.dd;i++){var cw=0;if(df[i].au.gh==yx_S){for(var j=0;j<df[i].item.childNodes.length;j++){var cn=df[i].item.childNodes[j];cn.style.height=mh[rc]+"px";cw+=cn.offsetWidth};df[i].item.style.width=cw+"px";mw[rc]+=cw};if(++cc==col){cc=0;rc++}};for(var i=0;i<row;i++){th+=mh[i];tw=Math.max(tw,mw[i])}}else{row=fd.row>0?fd.row:fd.col>0?Math.ceil(this.dd/fd.col):this.dd;col=Math.ceil(this.dd/row);for(var i=0;i<col;i++){mw[i]=0;mh[i]=0};for(var i=0;i<this.dd;i++){if(df[i].au.gh!=yx_S&&mw[cc]<df[i].item.offsetWidth){mw[cc]=df[i].item.offsetWidth};if(++rc==row){rc=0;cc++}};cc=rc=0;for(var i=0;i<this.dd;i++){if(df[i].au.gh!=yx_S){if(df[i].item.offsetWidth<mw[cc]){df[i].item.style.width=(df[i].aw+mw[cc]-df[i].item.offsetWidth)+"px"};mh[cc]+=df[i].item.offsetHeight};if(++rc==row){rc=0;cc++}};cc=rc=0;for(var i=0;i<this.dd;i++){if(df[i].au.gh==yx_S){df[i].item.style.width=mw[cc]+"px";mh[cc]+=df[i].item.offsetHeight};if(++rc==row){rc=0;cc++}};for(var i=0;i<col;i++){th=Math.max(th,mh[i]);tw+=mw[i]}};var aw=tw+(col-1)*fd.cq,ah=th+(row-1)*fd.cr;x.style.width=aw+"px";x.style.height=ah+"px";this.width=x.offsetWidth;this.height=x.offsetHeight;this.sW=(this.width-aw)/2;this.sH=(this.height-ah)/2;if(fd.ga>0||fd.fz>0){this.fx=yx_fk(f,0,0,this.holder,"inherit",yx_hu);this.fx.style.width=this.width+"px";this.fx.style.height=this.height+"px";this.fx.innerHTML=yx_do(fd,this.width,this.height);this.fx.onmouseover=yx_fx;this.fx.onmouseout=yx_fv;this.fx.onclick=yx_ay;this.fx.cl=x.cl;this.fx.dc=x.dc;this.fx.ap=x.ap};cc=rc=0;var dx=this.sW,dy=this.sH;for(var i=0;i<this.dd;i++){df[i].x=dx;df[i].y=dy;df[i].ox=dx;df[i].oy=dy;df[i].width=df[i].item.offsetWidth;df[i].height=df[i].item.offsetHeight;df[i].ow=df[i].width;df[i].oh=df[i].height;yx_fc(df[i].item,dx,dy);if(this.bar){dx+=df[i].width+fd.cq;if(++cc==col){dx=this.sW;dy+=mh[rc]+fd.cr;cc=0;rc++}}else{dy+=df[i].height+fd.cr;if(++rc==row){dy=this.sH;dx+=mw[cc]+fd.cq;rc=0;cc++}};df[i].dk()};var ee=yx_cn(this.au.name);if(ee!=null){this.as=ee.as;this.at=ee.at};this.ex=true;this.cb=false;if(this.go){this.fk()}};function yx_gm(item,cp,fu,ea,eb,bv,dq,gp,gs){if(item.item.className!=cp){item.item.className=cp};if(item.cs!=null&&item.cs.className!=ea){item.cs.className=ea};if(item.ct!=null&&item.ct.className!=eb){item.ct.className=eb};if(item.fv!=null&&item.fv.className!=fu){item.fv.className=fu};if(item.bl.className!=bv){item.bl.className=bv};var nw=item.item.offsetWidth,nh=item.item.offsetHeight,dw=item.ow-nw,dh=item.oh-nh;if(nw!=item.width||nh!=item.height){var dx=gp=="left"?0:gp=="center"?Math.round(dw/2):dw,dy=gs=="top"?0:gs=="middle"?Math.round(dh/2):dh;item.x=item.ox+dx;item.y=item.oy+dy;item.width=nw;item.height=nh;item.av.width=nw;item.av.height=nh;yx_fc(item.item,item.x,item.y);yx_fc(item.av,item.x,item.y)}};function yx_gt(){this.go=true;if(this.ex){this.ch(true)}else{if(!this.cb){this.cb=true;yx_ak(this,"dm","()",0,this.cl.cz)}}};function yx_ea(dq){this.go=false;if(this.fm){this.ao();if(this.dg!=this.cl||(dq&&!this.cl.gi)){yx_dz(this.holder);this.fm=false;if(this.at!=""){eval(this.at)}};if(this.dg!=this.cl){this.dg.ed()}}};function yx_aw(e){if(!yx_ej&&!yx_ei){yx_fo=0;yx_az(null)};yx_ej=false;yx_ei=false};function yx_ao(h,dq){var f=(h.da||dq==1)?(h.gg):(h.fr),gf=false;if(f!=null){try{var bm=yx_fi(f,"DIV");bm=null;gf=true}catch(err){}};return gf};function yx_cb(cy){if(cy.menu.ex){if(cy.gd>0){yx_gy(cy.gd);cy.gd=-1};yx_at(cy.menu)};cy.menu=new yx_ev(cy,cy,cy.au)};function yx_ca(cy){var df=cy.menu.df;for(var i=0;i<df.length;i++){if(df[i].menu!=null){if(df[i].menu.ex){yx_at(df[i].menu)};df[i].menu=new yx_ev(cy,df[i],df[i].au)}}};function yx_bz(i){if(yx_ee[i].menu.ex){if(yx_ee[i].gd>0){yx_gy(yx_ee[i].gd)};yx_at(yx_ee[i].menu)};yx_ee[i]={name:"",menu:{ex:false,fm:false}}};function yx_fe(x,y){yx_fc(this.holder,x,y);this.x=x;this.y=y};function yx_fd(x,y){yx_fb(this.holder,x,y);this.x+=x;this.y+=y};
