sq.zh=mn.nn();mn.sn(sq.zh,sq.lq,{qn:function(pq){this.oq(pq);this.pq.onComplete=this.ft.on(this);this.pq.jr=this.gt.on(this);this.pq.hr=this._q.on(this);this.pq.timeout=(4693+307);this.frequency=(this.pq.frequency||2);this.at={} ;this._t();} ,gt:function(mu,nu){if(this.pq.ou)this.pq.ou("offline, reconnecting");this.ru();this.su=setTimeout(this._t.on(this),(832+168));} ,_q:function(mu){if(this.pq.ou)this.pq.ou("timeout, reconnecting");this.ru();this.su=setTimeout(this._t.on(this),01750);} ,ru:function(){if(this.at.pq)this.at.pq.onComplete=undefined;clearTimeout(this.su);} ,_t:function(){if(this.pq.$h)this.pq.fq=(this.pq.$h)();this.at=new sq.vq(this.pq.url,this.pq);} ,ft:function(fu){try{var ku=sq.uq(fu);if(ku){(this.pq.lu||sq.kq)(ku);} else{if(this.pq.ou)this.pq.ou("reconnecting");} } catch(e){} this.su=setTimeout(this._t.on(this),this.frequency*(704+296));} } );var _h={mi:function(link,title,ni,qi,width,height,ri){return'<a href="'+link+'"'+(ri!=null?' class="'+ri+'"':'')+' target="_blank" title="'+title+'" onclick="this.newWindow = window.open(\''+link+'\', \''+ni+'\', \'toolbar=0,scrollbars=0,location=0,status=1,menubar=0,width='+width+',height='+height+',resizable=1\');this.newWindow.focus();this.newWindow.opener=window;return false;">'+qi+'</a>';} ,si:function(content){return'<table class="inner"><tr>'+content+'</tr></table>';} ,ti:function(ui,hi,id,ii,ji,ki,yt,li){var oi=2;var link=hi+"?thread="+id;var pi='<td>';if(ji||ii){pi+=_h.mi((li||!ii)?link:link+"&viewonly=true",localized[ji?0:1],"ImCenter"+id,ui,(501+139),(295+185),null);} else{pi+='<a href="#">'+ui+'</a>';} pi+='</td>';if(ji){pi+='<td class="icon">';pi+=_h.mi(link,localized[0],"ImCenter"+id,'<img src="'+qh+'/images/tbliclspeak.gif" width="15" height="15" border="0" alt="'+localized[0]+'">',01200,(437+43),null);pi+='</td>';oi++;} if(ii){pi+='<td class="icon">';pi+=_h.mi(link+"&viewonly=true",localized[1],"ImCenter"+id,'<img src="'+qh+'/images/tbliclread.gif" width="15" height="15" border="0" alt="'+localized[1]+'">',(485+155),(375+105),null);pi+='</td>';oi++;} if(yt!=""){pi+='</tr><tr><td class="firstmessage" colspan="'+oi+'"><a href="javascript:void(0)" title="'+yt+'" onclick="alert(this.title);return false;">';pi+=yt.length>036?yt.substring(0,(19+11))+'...':yt;pi+='</a></td>';} return _h.si(pi);} ,di:function(id,ei){return'<td class="icon">'+_h.mi(qh+'/operator/ban.php?'+(ei?'id='+ei:'thread='+id),localized[2],"ban"+id,'<img src="'+qh+'/images/ban.gif" width="15" height="15" border="0" alt="'+localized[2]+'">',01320,(417+63),null)+'</td>';} } ;sq.fi=mn.nn();mn.sn(sq.fi,sq.lq,{qn:function(pq){this.oq(pq);this.pq.$h=this.$h.on(this);this.pq.ou=this.ou.on(this);this.pq.lu=this.lu.on(this);this.pq.gi=0;this.ai=new Object();this.bi=0;this.t=this.pq.ci;this.vi=new sq.zh(this.pq);} ,$h:function(){return"since="+this.pq.gi+"&status="+this.pq.istatus;} ,qu:function(du){this.pq.status.innerHTML=du;} ,ou:function(s){this.qu(s);} ,wi:function(ih){var id,xi,yi,ii=false,ji=false,zi=false,ki=null,ei=null;for(var i=0;i<ih.attributes.length;i++){var $i=ih.attributes[i];if($i.nodeName=="id")id=$i.nodeValue;else if($i.nodeName=="stateid")xi=$i.nodeValue;else if($i.nodeName=="state")yi=$i.nodeValue;else if($i.nodeName=="canopen")ji=true;else if($i.nodeName=="canview")ii=true;else if($i.nodeName=="canban")zi=true;else if($i.nodeName=="ban")ki=$i.nodeValue;else if($i.nodeName=="banid")ei=$i.nodeValue;} function _i(ds,mj,id,nj){var ws=ls.fs(id,mj,ds);if(ws)ws.innerHTML=nj;} var mj=ls.os("thr"+id,this.t);if(xi=="closed"){if(mj){this.t.deleteRow(mj.rowIndex);} this.ai[id]=null;return;} var qj=qs.rs(ih,"name");var rj=qs.rs(ih,"addr");var sj=qs.rs(ih,"time");var tj=qs.rs(ih,"agent");var uj=qs.rs(ih,"modified");var yt=qs.rs(ih,"message");var hj='<td>'+qs.rs(ih,"useragent")+'</td>';if(ki!=null){hj='<td>'+qs.rs(ih,"reason")+'</td>';} if(zi){hj+=_h.di(id,ei);} hj=_h.si(hj);var ij=ls.os("t"+xi,this.t);var jj=ls.os("t"+xi+"end",this.t);if(mj!=null&&(mj.rowIndex<=ij.rowIndex||mj.rowIndex>=jj.rowIndex)){this.t.deleteRow(mj.rowIndex);this.ai[id]=null;mj=null;} if(mj==null){mj=this.t.insertRow(ij.rowIndex+1);mj.className=(ki=="blocked"&&xi!="chat")?"ban":"in"+xi;mj.id="thr"+id;this.ai[id]=new Array(sj,uj,xi);ls.insertCell(mj,"name","visitor",null,null,_h.ti(qj,this.pq.agentservl,id,ii,ji,ki,yt,xi!='chat'));ls.insertCell(mj,"contid","visitor","center",null,rj);ls.insertCell(mj,"state","visitor","center",null,yi);ls.insertCell(mj,"op","visitor","center",null,tj);ls.insertCell(mj,"time","visitor","center",null,this.kj(sj));ls.insertCell(mj,"wait","visitor","center",null,(xi!='chat'?this.kj(uj):'-'));ls.insertCell(mj,"etc","visitor","center",null,hj);if(xi=='wait'||xi=='prio')return true;} else{this.ai[id]=new Array(sj,uj,xi);mj.className=(ki=="blocked"&&xi!="chat")?"ban":"in"+xi;_i(this.t,mj,"name",_h.ti(qj,this.pq.agentservl,id,ii,ji,ki,yt,xi!='chat'));_i(this.t,mj,"contid",rj);_i(this.t,mj,"state",yi);_i(this.t,mj,"op",tj);_i(this.t,mj,"time",this.kj(sj));_i(this.t,mj,"wait",(xi!='chat'?this.kj(uj):'-'));_i(this.t,mj,"etc",hj);} return false;} ,lj:function(){function oj(t,id){var ij=$(id);var jj=$(id+"end");if(ij==null||jj==null){return false;} return ij.rowIndex+1<jj.rowIndex;} var pj=$("statustd");if(pj){var dj=oj(this.t,"twait")||oj(this.t,"tprio")||oj(this.t,"tchat");pj.innerHTML=dj?"":this.pq.noclients;pj.height=dj?(3+2):(20+10);} } ,kj:function(ej){var fj=Math.floor(((new Date()).getTime()-ej-this.bi)/01750);var gj=Math.floor(fj/(38+22));var aj="";fj=fj%(36+24);if(fj<(7+3))fj="0"+fj;if(gj>=074){var bj=Math.floor(gj/(46+14));gj=gj%0x3c;if(gj<012)gj="0"+gj;aj=bj+":";} return aj+gj+":"+fj;} ,cj:function(){for(var i in this.ai){if(this.ai[i]!=null){var value=this.ai[i];var mj=ls.os("thr"+i,this.t);if(mj!=null){function _i(ds,mj,id,nj){var ws=ls.fs(id,mj,ds);if(ws)ws.innerHTML=nj;} _i(this.t,mj,"time",this.kj(value[0]));_i(this.t,mj,"wait",(value[2]!='chat'?this.kj(value[1]):'-'));} } } } ,lu:function(vj){var wj=false;if(vj.tagName=='threads'){var xj=qs.ks(vj,"time");var yj=qs.ks(vj,"revision");if(xj)this.bi=(new Date()).getTime()-xj;if(yj)this.pq.gi=yj;for(var i=0;i<vj.childNodes.length;i++){var ih=vj.childNodes[i];if(ih.tagName=='thread')if(this.wi(ih))wj=true;} this.lj();this.cj();this.qu(this.pq.istatus?"Away":"Up to date");if(wj){$s(qh+'/sounds/new_user.wav');window.focus();if(updaterOptions.showpopup){alert(localized[(3+2)]);} } } else if(vj.tagName=='error'){this.qu(qs.rs(vj,"descr"));} else{this.qu("reconnecting");} } } );function zj(){if($("sidebar")&&$("wcontent")&&$("togglemenu")){if($("wcontent").className=="contentnomenu"){$("sidebar").style.display="block";$("wcontent").className="contentinner";$("togglemenu").innerHTML=localized[(1+3)];} else{$("sidebar").style.display="none";$("wcontent").className="contentnomenu";$("togglemenu").innerHTML=localized[3];} } } var qh="";er.lr({'#togglemenu':function(xh){xh.onclick=function(){zj();} ;} } );kr.lr(window,'onload',function(){qh=updaterOptions.wroot;new sq.fi(({ci:$("threadlist"),status:$("connstatus"),istatus:0} ).un(updaterOptions||{} ));if(!updaterOptions.havemenu){zj();} } );