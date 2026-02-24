(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const _s="182",Tr={ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dd=0,Xc=1,pd=2,vo=1,gd=2,ts=3,Fn=0,ze=1,yn=2,jn=0,wr=1,qc=2,$c=3,Yc=4,md=5,Ui=100,_d=101,xd=102,vd=103,yd=104,Sd=200,Md=201,bd=202,Ed=203,sl=204,ol=205,Ad=206,Td=207,wd=208,Cd=209,Rd=210,Pd=211,Dd=212,Ld=213,Id=214,al=0,ll=1,cl=2,Rr=3,hl=4,ul=5,fl=6,dl=7,$u=0,Ud=1,Nd=2,In=0,Yu=1,Zu=2,Ku=3,Ju=4,ju=5,Qu=6,tf=7,ef=300,Vi=301,Pr=302,pl=303,gl=304,Vo=306,ml=1e3,Jn=1001,_l=1002,Ce=1003,Fd=1004,Es=1005,De=1006,Qo=1007,Fi=1008,un=1009,nf=1010,rf=1011,as=1012,dc=1013,On=1014,Pn=1015,ti=1016,pc=1017,gc=1018,ls=1020,sf=35902,of=35899,af=1021,lf=1022,Sn=1023,ei=1026,Oi=1027,cf=1028,mc=1029,Dr=1030,_c=1031,xc=1033,yo=33776,So=33777,Mo=33778,bo=33779,xl=35840,vl=35841,yl=35842,Sl=35843,Ml=36196,bl=37492,El=37496,Al=37488,Tl=37489,wl=37490,Cl=37491,Rl=37808,Pl=37809,Dl=37810,Ll=37811,Il=37812,Ul=37813,Nl=37814,Fl=37815,Ol=37816,Bl=37817,zl=37818,Vl=37819,kl=37820,Hl=37821,Gl=36492,Wl=36494,Xl=36495,ql=36283,$l=36284,Yl=36285,Zl=36286,Od=3200,hf=0,Bd=1,pi="",ln="srgb",Lr="srgb-linear",Do="linear",ne="srgb",Yi=7680,Zc=519,zd=512,Vd=513,kd=514,vc=515,Hd=516,Gd=517,yc=518,Wd=519,Kc=35044,Jc="300 es",Dn=2e3,Lo=2001;function uf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xd(){const i=Io("canvas");return i.style.display="block",i}const jc={};function Qc(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ht(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Jt(...i){const t="THREE."+i.shift();console.error(t,...i)}function cs(...i){const t=i.join(" ");t in jc||(jc[t]=!0,Ht(...i))}function qd(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eo=Math.PI/180,Kl=180/Math.PI;function Nr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function $d(i,t){return(i%t+t)%t}function ta(i,t,e){return(1-e)*i+e*t}function zr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Yd={DEG2RAD:Eo};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ki{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let h=n[r+0],u=n[r+1],f=n[r+2],p=n[r+3],g=s[o+0],m=s[o+1],M=s[o+2],b=s[o+3];if(a<=0){t[e+0]=h,t[e+1]=u,t[e+2]=f,t[e+3]=p;return}if(a>=1){t[e+0]=g,t[e+1]=m,t[e+2]=M,t[e+3]=b;return}if(p!==b||h!==g||u!==m||f!==M){let x=h*g+u*m+f*M+p*b;x<0&&(g=-g,m=-m,M=-M,b=-b,x=-x);let _=1-a;if(x<.9995){const E=Math.acos(x),d=Math.sin(E);_=Math.sin(_*E)/d,a=Math.sin(a*E)/d,h=h*_+g*a,u=u*_+m*a,f=f*_+M*a,p=p*_+b*a}else{h=h*_+g*a,u=u*_+m*a,f=f*_+M*a,p=p*_+b*a;const E=1/Math.sqrt(h*h+u*u+f*f+p*p);h*=E,u*=E,f*=E,p*=E}}t[e]=h,t[e+1]=u,t[e+2]=f,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],h=n[r+1],u=n[r+2],f=n[r+3],p=s[o],g=s[o+1],m=s[o+2],M=s[o+3];return t[e]=a*M+f*p+h*m-u*g,t[e+1]=h*M+f*g+u*p-a*m,t[e+2]=u*M+f*m+a*g-h*p,t[e+3]=f*M-a*p-h*g-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,h=Math.sin,u=a(n/2),f=a(r/2),p=a(s/2),g=h(n/2),m=h(r/2),M=h(s/2);switch(o){case"XYZ":this._x=g*f*p+u*m*M,this._y=u*m*p-g*f*M,this._z=u*f*M+g*m*p,this._w=u*f*p-g*m*M;break;case"YXZ":this._x=g*f*p+u*m*M,this._y=u*m*p-g*f*M,this._z=u*f*M-g*m*p,this._w=u*f*p+g*m*M;break;case"ZXY":this._x=g*f*p-u*m*M,this._y=u*m*p+g*f*M,this._z=u*f*M+g*m*p,this._w=u*f*p-g*m*M;break;case"ZYX":this._x=g*f*p-u*m*M,this._y=u*m*p+g*f*M,this._z=u*f*M-g*m*p,this._w=u*f*p+g*m*M;break;case"YZX":this._x=g*f*p+u*m*M,this._y=u*m*p+g*f*M,this._z=u*f*M-g*m*p,this._w=u*f*p-g*m*M;break;case"XZY":this._x=g*f*p-u*m*M,this._y=u*m*p-g*f*M,this._z=u*f*M+g*m*p,this._w=u*f*p+g*m*M;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],h=e[9],u=e[2],f=e[6],p=e[10],g=n+a+p;if(g>0){const m=.5/Math.sqrt(g+1);this._w=.25/m,this._x=(f-h)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(f-h)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(h+f)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(h+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,h=e._y,u=e._z,f=e._w;return this._x=n*f+o*a+r*u-s*h,this._y=r*f+o*h+s*a-n*u,this._z=s*f+o*u+n*h-r*a,this._w=o*f-n*a-r*h-s*u,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let h=1-e;if(a<.9995){const u=Math.acos(a),f=Math.sin(u);h=Math.sin(h*u)/f,e=Math.sin(e*u)/f,this._x=this._x*h+n*e,this._y=this._y*h+r*e,this._z=this._z*h+s*e,this._w=this._w*h+o*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+r*e,this._z=this._z*h+s*e,this._w=this._w*h+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(th.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,h=t.w,u=2*(o*r-a*n),f=2*(a*e-s*r),p=2*(s*n-o*e);return this.x=e+h*u+o*p-a*f,this.y=n+h*f+a*u-s*p,this.z=r+h*p+s*f-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,h=e.z;return this.x=r*h-s*a,this.y=s*o-n*h,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new U,th=new ki;class qt{constructor(t,e,n,r,s,o,a,h,u){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,h,u)}set(t,e,n,r,s,o,a,h,u){const f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=e,f[4]=s,f[5]=h,f[6]=n,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],h=n[6],u=n[1],f=n[4],p=n[7],g=n[2],m=n[5],M=n[8],b=r[0],x=r[3],_=r[6],E=r[1],d=r[4],l=r[7],y=r[2],c=r[5],R=r[8];return s[0]=o*b+a*E+h*y,s[3]=o*x+a*d+h*c,s[6]=o*_+a*l+h*R,s[1]=u*b+f*E+p*y,s[4]=u*x+f*d+p*c,s[7]=u*_+f*l+p*R,s[2]=g*b+m*E+M*y,s[5]=g*x+m*d+M*c,s[8]=g*_+m*l+M*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],u=t[7],f=t[8];return e*o*f-e*a*u-n*s*f+n*a*h+r*s*u-r*o*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],u=t[7],f=t[8],p=f*o-a*u,g=a*h-f*s,m=u*s-o*h,M=e*p+n*g+r*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=p*b,t[1]=(r*u-f*n)*b,t[2]=(a*n-r*o)*b,t[3]=g*b,t[4]=(f*e-r*h)*b,t[5]=(r*s-a*e)*b,t[6]=m*b,t[7]=(n*h-u*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const h=Math.cos(s),u=Math.sin(s);return this.set(n*h,n*u,-n*(h*o+u*a)+o+t,-r*u,r*h,-r*(-u*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const na=new qt,eh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zd(){const i={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ne&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(r.r=Cr(r.r),r.g=Cr(r.g),r.b=Cr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pi?Do:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lr]:{primaries:t,whitePoint:n,transfer:Do,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}const jt=Zd();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class Kd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zi===void 0&&(Zi=Io("canvas")),Zi.width=t.width,Zi.height=t.height;const r=Zi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Io("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jd=0;class Sc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Nr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ia(r[o].image)):s.push(ia(r[o]))}else s=ia(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let jd=0;const ra=new U;class Ve extends Xi{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=Jn,r=Jn,s=De,o=Fi,a=Sn,h=un,u=Ve.DEFAULT_ANISOTROPY,f=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Nr(),this.name="",this.source=new Sc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=h,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ef)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ml:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case _l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ml:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case _l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=ef;Ve.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,r=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const h=t.elements,u=h[0],f=h[4],p=h[8],g=h[1],m=h[5],M=h[9],b=h[2],x=h[6],_=h[10];if(Math.abs(f-g)<.01&&Math.abs(p-b)<.01&&Math.abs(M-x)<.01){if(Math.abs(f+g)<.1&&Math.abs(p+b)<.1&&Math.abs(M+x)<.1&&Math.abs(u+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const d=(u+1)/2,l=(m+1)/2,y=(_+1)/2,c=(f+g)/4,R=(p+b)/4,T=(M+x)/4;return d>l&&d>y?d<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(d),r=c/n,s=R/n):l>y?l<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(l),n=c/r,s=T/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=R/s,r=T/s),this.set(n,r,s,e),this}let E=Math.sqrt((x-M)*(x-M)+(p-b)*(p-b)+(g-f)*(g-f));return Math.abs(E)<.001&&(E=1),this.x=(x-M)/E,this.y=(p-b)/E,this.z=(g-f)/E,this.w=Math.acos((u+m+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qd extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Ve(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Sc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Qd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ff extends Ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tp extends Ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ke{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vr),Ts.subVectors(this.max,Vr),Ki.subVectors(t.a,Vr),Ji.subVectors(t.b,Vr),ji.subVectors(t.c,Vr),ri.subVectors(Ji,Ki),si.subVectors(ji,Ji),Mi.subVectors(Ki,ji);let e=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,si.z,0,-si.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-si.y,si.x,0,-Mi.y,Mi.x,0];return!sa(e,Ki,Ji,ji,Ts)||(e=[1,0,0,0,1,0,0,0,1],!sa(e,Ki,Ji,ji,Ts))?!1:(ws.crossVectors(ri,si),e=[ws.x,ws.y,ws.z],sa(e,Ki,Ji,ji,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Hn=[new U,new U,new U,new U,new U,new U,new U,new U],pn=new U,As=new ke,Ki=new U,Ji=new U,ji=new U,ri=new U,si=new U,Mi=new U,Vr=new U,Ts=new U,ws=new U,bi=new U;function sa(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){bi.fromArray(i,s);const a=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),h=t.dot(bi),u=e.dot(bi),f=n.dot(bi);if(Math.max(-Math.max(h,u,f),Math.min(h,u,f))>a)return!1}return!0}const ep=new ke,kr=new U,oa=new U;class Mc{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ep.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);const e=kr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(kr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(oa)),this.expandByPoint(kr.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Gn=new U,aa=new U,Cs=new U,oi=new U,la=new U,Rs=new U,ca=new U;class xs{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){aa.copy(t).add(e).multiplyScalar(.5),Cs.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(aa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Cs),a=oi.dot(this.direction),h=-oi.dot(Cs),u=oi.lengthSq(),f=Math.abs(1-o*o);let p,g,m,M;if(f>0)if(p=o*h-a,g=o*a-h,M=s*f,p>=0)if(g>=-M)if(g<=M){const b=1/f;p*=b,g*=b,m=p*(p+o*g+2*a)+g*(o*p+g+2*h)+u}else g=s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*h)+u;else g=-s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*h)+u;else g<=-M?(p=Math.max(0,-(-o*s+a)),g=p>0?-s:Math.min(Math.max(-s,-h),s),m=-p*p+g*(g+2*h)+u):g<=M?(p=0,g=Math.min(Math.max(-s,-h),s),m=g*(g+2*h)+u):(p=Math.max(0,-(o*s+a)),g=p>0?s:Math.min(Math.max(-s,-h),s),m=-p*p+g*(g+2*h)+u);else g=o>0?-s:s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(aa).addScaledVector(Cs,g),m}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),r=Gn.dot(Gn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,h;const u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,g=this.origin;return u>=0?(n=(t.min.x-g.x)*u,r=(t.max.x-g.x)*u):(n=(t.max.x-g.x)*u,r=(t.min.x-g.x)*u),f>=0?(s=(t.min.y-g.y)*f,o=(t.max.y-g.y)*f):(s=(t.max.y-g.y)*f,o=(t.min.y-g.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(t.min.z-g.z)*p,h=(t.max.z-g.z)*p):(a=(t.max.z-g.z)*p,h=(t.min.z-g.z)*p),n>h||a>r)||((a>n||n!==n)&&(n=a),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,r,s){la.subVectors(e,t),Rs.subVectors(n,t),ca.crossVectors(la,Rs);let o=this.direction.dot(ca),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);const h=a*this.direction.dot(Rs.crossVectors(oi,Rs));if(h<0)return null;const u=a*this.direction.dot(la.cross(oi));if(u<0||h+u>o)return null;const f=-a*oi.dot(ca);return f<0?null:this.at(f/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,r,s,o,a,h,u,f,p,g,m,M,b,x){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,h,u,f,p,g,m,M,b,x)}set(t,e,n,r,s,o,a,h,u,f,p,g,m,M,b,x){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=h,_[2]=u,_[6]=f,_[10]=p,_[14]=g,_[3]=m,_[7]=M,_[11]=b,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Qi.setFromMatrixColumn(t,0).length(),s=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(r),u=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const g=o*f,m=o*p,M=a*f,b=a*p;e[0]=h*f,e[4]=-h*p,e[8]=u,e[1]=m+M*u,e[5]=g-b*u,e[9]=-a*h,e[2]=b-g*u,e[6]=M+m*u,e[10]=o*h}else if(t.order==="YXZ"){const g=h*f,m=h*p,M=u*f,b=u*p;e[0]=g+b*a,e[4]=M*a-m,e[8]=o*u,e[1]=o*p,e[5]=o*f,e[9]=-a,e[2]=m*a-M,e[6]=b+g*a,e[10]=o*h}else if(t.order==="ZXY"){const g=h*f,m=h*p,M=u*f,b=u*p;e[0]=g-b*a,e[4]=-o*p,e[8]=M+m*a,e[1]=m+M*a,e[5]=o*f,e[9]=b-g*a,e[2]=-o*u,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const g=o*f,m=o*p,M=a*f,b=a*p;e[0]=h*f,e[4]=M*u-m,e[8]=g*u+b,e[1]=h*p,e[5]=b*u+g,e[9]=m*u-M,e[2]=-u,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const g=o*h,m=o*u,M=a*h,b=a*u;e[0]=h*f,e[4]=b-g*p,e[8]=M*p+m,e[1]=p,e[5]=o*f,e[9]=-a*f,e[2]=-u*f,e[6]=m*p+M,e[10]=g-b*p}else if(t.order==="XZY"){const g=o*h,m=o*u,M=a*h,b=a*u;e[0]=h*f,e[4]=-p,e[8]=u*f,e[1]=g*p+b,e[5]=o*f,e[9]=m*p-M,e[2]=M*p-m,e[6]=a*f,e[10]=b*p+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(np,t,ip)}lookAt(t,e,n){const r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ai.crossVectors(n,Qe),ai.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ai.crossVectors(n,Qe)),ai.normalize(),Ps.crossVectors(Qe,ai),r[0]=ai.x,r[4]=Ps.x,r[8]=Qe.x,r[1]=ai.y,r[5]=Ps.y,r[9]=Qe.y,r[2]=ai.z,r[6]=Ps.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],h=n[8],u=n[12],f=n[1],p=n[5],g=n[9],m=n[13],M=n[2],b=n[6],x=n[10],_=n[14],E=n[3],d=n[7],l=n[11],y=n[15],c=r[0],R=r[4],T=r[8],v=r[12],S=r[1],A=r[5],w=r[9],C=r[13],N=r[2],F=r[6],B=r[10],O=r[14],H=r[3],K=r[7],nt=r[11],tt=r[15];return s[0]=o*c+a*S+h*N+u*H,s[4]=o*R+a*A+h*F+u*K,s[8]=o*T+a*w+h*B+u*nt,s[12]=o*v+a*C+h*O+u*tt,s[1]=f*c+p*S+g*N+m*H,s[5]=f*R+p*A+g*F+m*K,s[9]=f*T+p*w+g*B+m*nt,s[13]=f*v+p*C+g*O+m*tt,s[2]=M*c+b*S+x*N+_*H,s[6]=M*R+b*A+x*F+_*K,s[10]=M*T+b*w+x*B+_*nt,s[14]=M*v+b*C+x*O+_*tt,s[3]=E*c+d*S+l*N+y*H,s[7]=E*R+d*A+l*F+y*K,s[11]=E*T+d*w+l*B+y*nt,s[15]=E*v+d*C+l*O+y*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],h=t[9],u=t[13],f=t[2],p=t[6],g=t[10],m=t[14],M=t[3],b=t[7],x=t[11],_=t[15],E=h*m-u*g,d=a*m-u*p,l=a*g-h*p,y=o*m-u*f,c=o*g-h*f,R=o*p-a*f;return e*(b*E-x*d+_*l)-n*(M*E-x*y+_*c)+r*(M*d-b*y+_*R)-s*(M*l-b*c+x*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],u=t[7],f=t[8],p=t[9],g=t[10],m=t[11],M=t[12],b=t[13],x=t[14],_=t[15],E=p*x*u-b*g*u+b*h*m-a*x*m-p*h*_+a*g*_,d=M*g*u-f*x*u-M*h*m+o*x*m+f*h*_-o*g*_,l=f*b*u-M*p*u+M*a*m-o*b*m-f*a*_+o*p*_,y=M*p*h-f*b*h-M*a*g+o*b*g+f*a*x-o*p*x,c=e*E+n*d+r*l+s*y;if(c===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/c;return t[0]=E*R,t[1]=(b*g*s-p*x*s-b*r*m+n*x*m+p*r*_-n*g*_)*R,t[2]=(a*x*s-b*h*s+b*r*u-n*x*u-a*r*_+n*h*_)*R,t[3]=(p*h*s-a*g*s-p*r*u+n*g*u+a*r*m-n*h*m)*R,t[4]=d*R,t[5]=(f*x*s-M*g*s+M*r*m-e*x*m-f*r*_+e*g*_)*R,t[6]=(M*h*s-o*x*s-M*r*u+e*x*u+o*r*_-e*h*_)*R,t[7]=(o*g*s-f*h*s+f*r*u-e*g*u-o*r*m+e*h*m)*R,t[8]=l*R,t[9]=(M*p*s-f*b*s-M*n*m+e*b*m+f*n*_-e*p*_)*R,t[10]=(o*b*s-M*a*s+M*n*u-e*b*u-o*n*_+e*a*_)*R,t[11]=(f*a*s-o*p*s-f*n*u+e*p*u+o*n*m-e*a*m)*R,t[12]=y*R,t[13]=(f*b*r-M*p*r+M*n*g-e*b*g-f*n*x+e*p*x)*R,t[14]=(M*a*r-o*b*r-M*n*h+e*b*h+o*n*x-e*a*x)*R,t[15]=(o*p*r-f*a*r+f*n*h-e*p*h-o*n*g+e*a*g)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,h=t.z,u=s*o,f=s*a;return this.set(u*o+n,u*a-r*h,u*h+r*a,0,u*a+r*h,f*a+n,f*h-r*o,0,u*h-r*a,f*h+r*o,s*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,h=e._w,u=s+s,f=o+o,p=a+a,g=s*u,m=s*f,M=s*p,b=o*f,x=o*p,_=a*p,E=h*u,d=h*f,l=h*p,y=n.x,c=n.y,R=n.z;return r[0]=(1-(b+_))*y,r[1]=(m+l)*y,r[2]=(M-d)*y,r[3]=0,r[4]=(m-l)*c,r[5]=(1-(g+_))*c,r[6]=(x+E)*c,r[7]=0,r[8]=(M+d)*R,r[9]=(x-E)*R,r[10]=(1-(g+b))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=Qi.set(r[0],r[1],r[2]).length();const o=Qi.set(r[4],r[5],r[6]).length(),a=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),gn.copy(this);const u=1/s,f=1/o,p=1/a;return gn.elements[0]*=u,gn.elements[1]*=u,gn.elements[2]*=u,gn.elements[4]*=f,gn.elements[5]*=f,gn.elements[6]*=f,gn.elements[8]*=p,gn.elements[9]*=p,gn.elements[10]*=p,e.setFromRotationMatrix(gn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Dn,h=!1){const u=this.elements,f=2*s/(e-t),p=2*s/(n-r),g=(e+t)/(e-t),m=(n+r)/(n-r);let M,b;if(h)M=s/(o-s),b=o*s/(o-s);else if(a===Dn)M=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===Lo)M=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=M,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Dn,h=!1){const u=this.elements,f=2/(e-t),p=2/(n-r),g=-(e+t)/(e-t),m=-(n+r)/(n-r);let M,b;if(h)M=1/(o-s),b=o/(o-s);else if(a===Dn)M=-2/(o-s),b=-(o+s)/(o-s);else if(a===Lo)M=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=0,u[12]=g,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=M,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new U,gn=new Kt,np=new U(0,0,0),ip=new U(1,1,1),ai=new U,Ps=new U,Qe=new U,ih=new Kt,rh=new ki;class ni{constructor(t=0,e=0,n=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],h=r[1],u=r[5],f=r[9],p=r[2],g=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,m),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rh.setFromEuler(this),this.setFromQuaternion(rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class df{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rp=0;const sh=new U,tr=new ki,Wn=new Kt,Ds=new U,Hr=new U,sp=new U,op=new ki,oh=new U(1,0,0),ah=new U(0,1,0),lh=new U(0,0,1),ch={type:"added"},ap={type:"removed"},er={type:"childadded",child:null},ha={type:"childremoved",child:null};class nn extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const t=new U,e=new ni,n=new ki,r=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Kt},normalMatrix:{value:new qt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(ah,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return sh.copy(t).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(ah,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Hr,Ds,this.up):Wn.lookAt(Ds,Hr,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(Wn),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ch),er.child=t,this.dispatchEvent(er),er.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ap),ha.child=t,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ch),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let u=0,f=h.length;u<f;u++){const p=h[u];s(t.shapes,p)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,u=this.material.length;h<u;h++)a.push(s(t.materials,this.material[h]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];r.animations.push(s(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),u=o(t.textures),f=o(t.images),p=o(t.shapes),g=o(t.skeletons),m=o(t.animations),M=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),m.length>0&&(n.animations=m),M.length>0&&(n.nodes=M)}return n.object=r,n;function o(a){const h=[];for(const u in a){const f=a[u];delete f.metadata,h.push(f)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}nn.DEFAULT_UP=new U(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new U,Xn=new U,ua=new U,qn=new U,nr=new U,ir=new U,hh=new U,fa=new U,da=new U,pa=new U,ga=new ce,ma=new ce,_a=new ce;class he{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),mn.subVectors(t,e),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){mn.subVectors(r,e),Xn.subVectors(n,e),ua.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(Xn),h=mn.dot(ua),u=Xn.dot(Xn),f=Xn.dot(ua),p=o*u-a*a;if(p===0)return s.set(0,0,0),null;const g=1/p,m=(u*h-a*f)*g,M=(o*f-a*h)*g;return s.set(1-m-M,M,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,r,s,o,a,h){return this.getBarycoord(t,e,n,r,qn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,qn.x),h.addScaledVector(o,qn.y),h.addScaledVector(a,qn.z),h)}static getInterpolatedAttribute(t,e,n,r,s,o){return ga.setScalar(0),ma.setScalar(0),_a.setScalar(0),ga.fromBufferAttribute(t,e),ma.fromBufferAttribute(t,n),_a.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ga,s.x),o.addScaledVector(ma,s.y),o.addScaledVector(_a,s.z),o}static isFrontFacing(t,e,n,r){return mn.subVectors(n,e),Xn.subVectors(t,e),mn.cross(Xn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),mn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return he.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return he.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return he.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return he.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return he.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;nr.subVectors(r,n),ir.subVectors(s,n),fa.subVectors(t,n);const h=nr.dot(fa),u=ir.dot(fa);if(h<=0&&u<=0)return e.copy(n);da.subVectors(t,r);const f=nr.dot(da),p=ir.dot(da);if(f>=0&&p<=f)return e.copy(r);const g=h*p-f*u;if(g<=0&&h>=0&&f<=0)return o=h/(h-f),e.copy(n).addScaledVector(nr,o);pa.subVectors(t,s);const m=nr.dot(pa),M=ir.dot(pa);if(M>=0&&m<=M)return e.copy(s);const b=m*u-h*M;if(b<=0&&u>=0&&M<=0)return a=u/(u-M),e.copy(n).addScaledVector(ir,a);const x=f*M-m*p;if(x<=0&&p-f>=0&&m-M>=0)return hh.subVectors(s,r),a=(p-f)/(p-f+(m-M)),e.copy(r).addScaledVector(hh,a);const _=1/(x+b+g);return o=b*_,a=g*_,e.copy(n).addScaledVector(nr,o).addScaledVector(ir,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ie{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=jt.workingColorSpace){if(t=$d(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=xa(o,s,t+1/3),this.g=xa(o,s,t),this.b=xa(o,s,t-1/3)}return jt.colorSpaceToWorking(this,r),this}setStyle(t,e=ln){function n(s){s!==void 0&&parseFloat(s)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const n=pf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return jt.workingToColorSpace(Pe.copy(this),t),Math.round(Wt(Pe.r*255,0,255))*65536+Math.round(Wt(Pe.g*255,0,255))*256+Math.round(Wt(Pe.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Pe.copy(this),e);const n=Pe.r,r=Pe.g,s=Pe.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let h,u;const f=(a+o)/2;if(a===o)h=0,u=0;else{const p=o-a;switch(u=f<=.5?p/(o+a):p/(2-o-a),o){case n:h=(r-s)/p+(r<s?6:0);break;case r:h=(s-n)/p+2;break;case s:h=(n-r)/p+4;break}h/=6}return t.h=h,t.s=u,t.l=f,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=ln){jt.workingToColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,r=Pe.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Ls);const n=ta(li.h,Ls.h,e),r=ta(li.s,Ls.s,e),s=ta(li.l,Ls.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new ie;ie.NAMES=pf;let lp=0;class vs extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=wr,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=ol,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sl&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const h=s[a];delete h.metadata,o.push(h)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ko extends vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new U,Is=new pt;let cp=0;class Ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kc&&(t.usage=this.usage),t}}class gf extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mf extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Mn extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hp=0;const on=new Kt,va=new nn,rr=new U,tn=new ke,Gr=new ke,Ee=new U;class zn extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uf(t)?mf:gf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return va.lookAt(t),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mn(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ke);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(tn.min,Gr.min),tn.expandByPoint(Ee),Ee.addVectors(tn.max,Gr.max),tn.expandByPoint(Ee)):(tn.expandByPoint(Gr.min),tn.expandByPoint(Gr.max))}tn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ee.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ee));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],h=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Ee.fromBufferAttribute(a,u),h&&(rr.fromBufferAttribute(t,u),Ee.add(rr)),r=Math.max(r,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let T=0;T<n.count;T++)a[T]=new U,h[T]=new U;const u=new U,f=new U,p=new U,g=new pt,m=new pt,M=new pt,b=new U,x=new U;function _(T,v,S){u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,v),p.fromBufferAttribute(n,S),g.fromBufferAttribute(s,T),m.fromBufferAttribute(s,v),M.fromBufferAttribute(s,S),f.sub(u),p.sub(u),m.sub(g),M.sub(g);const A=1/(m.x*M.y-M.x*m.y);isFinite(A)&&(b.copy(f).multiplyScalar(M.y).addScaledVector(p,-m.y).multiplyScalar(A),x.copy(p).multiplyScalar(m.x).addScaledVector(f,-M.x).multiplyScalar(A),a[T].add(b),a[v].add(b),a[S].add(b),h[T].add(x),h[v].add(x),h[S].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let T=0,v=E.length;T<v;++T){const S=E[T],A=S.start,w=S.count;for(let C=A,N=A+w;C<N;C+=3)_(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const d=new U,l=new U,y=new U,c=new U;function R(T){y.fromBufferAttribute(r,T),c.copy(y);const v=a[T];d.copy(v),d.sub(y.multiplyScalar(y.dot(v))).normalize(),l.crossVectors(c,v);const A=l.dot(h[T])<0?-1:1;o.setXYZW(T,d.x,d.y,d.z,A)}for(let T=0,v=E.length;T<v;++T){const S=E[T],A=S.start,w=S.count;for(let C=A,N=A+w;C<N;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,m=n.count;g<m;g++)n.setXYZ(g,0,0,0);const r=new U,s=new U,o=new U,a=new U,h=new U,u=new U,f=new U,p=new U;if(t)for(let g=0,m=t.count;g<m;g+=3){const M=t.getX(g+0),b=t.getX(g+1),x=t.getX(g+2);r.fromBufferAttribute(e,M),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,x),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),a.fromBufferAttribute(n,M),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,x),a.add(f),h.add(f),u.add(f),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(b,h.x,h.y,h.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let g=0,m=e.count;g<m;g+=3)r.fromBufferAttribute(e,g+0),s.fromBufferAttribute(e,g+1),o.fromBufferAttribute(e,g+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),n.setXYZ(g+0,f.x,f.y,f.z),n.setXYZ(g+1,f.x,f.y,f.z),n.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,h){const u=a.array,f=a.itemSize,p=a.normalized,g=new u.constructor(h.length*f);let m=0,M=0;for(let b=0,x=h.length;b<x;b++){a.isInterleavedBufferAttribute?m=h[b]*a.data.stride+a.offset:m=h[b]*f;for(let _=0;_<f;_++)g[M++]=u[m++]}return new Ze(g,f,p)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new zn,n=this.index.array,r=this.attributes;for(const a in r){const h=r[a],u=t(h,n);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const h=[],u=s[a];for(let f=0,p=u.length;f<p;f++){const g=u[f],m=t(g,n);h.push(m)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const u=n[h];t.data.attributes[h]=u.toJSON(t.data)}const r={};let s=!1;for(const h in this.morphAttributes){const u=this.morphAttributes[h],f=[];for(let p=0,g=u.length;p<g;p++){const m=u[p];f.push(m.toJSON(t.data))}f.length>0&&(r[h]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(e))}const s=t.morphAttributes;for(const u in s){const f=[],p=s[u];for(let g=0,m=p.length;g<m;g++)f.push(p[g].clone(e));this.morphAttributes[u]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,f=o.length;u<f;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new Kt,Ei=new xs,Us=new Mc,fh=new U,Ns=new U,Fs=new U,Os=new U,ya=new U,Bs=new U,dh=new U,zs=new U;class Ne extends nn{constructor(t=new zn,e=new ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Bs.set(0,0,0);for(let h=0,u=s.length;h<u;h++){const f=a[h],p=s[h];f!==0&&(ya.fromBufferAttribute(p,t),o?Bs.addScaledVector(ya,f):Bs.addScaledVector(ya.sub(e),f))}e.add(Bs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),Ei.copy(t.ray).recast(t.near),!(Us.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Us,fh)===null||Ei.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(uh.copy(s).invert(),Ei.copy(t.ray).applyMatrix4(uh),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,h=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,g=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,b=g.length;M<b;M++){const x=g[M],_=o[x.materialIndex],E=Math.max(x.start,m.start),d=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let l=E,y=d;l<y;l+=3){const c=a.getX(l),R=a.getX(l+1),T=a.getX(l+2);r=Vs(this,_,t,n,u,f,p,c,R,T),r&&(r.faceIndex=Math.floor(l/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const M=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let x=M,_=b;x<_;x+=3){const E=a.getX(x),d=a.getX(x+1),l=a.getX(x+2);r=Vs(this,o,t,n,u,f,p,E,d,l),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let M=0,b=g.length;M<b;M++){const x=g[M],_=o[x.materialIndex],E=Math.max(x.start,m.start),d=Math.min(h.count,Math.min(x.start+x.count,m.start+m.count));for(let l=E,y=d;l<y;l+=3){const c=l,R=l+1,T=l+2;r=Vs(this,_,t,n,u,f,p,c,R,T),r&&(r.faceIndex=Math.floor(l/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const M=Math.max(0,m.start),b=Math.min(h.count,m.start+m.count);for(let x=M,_=b;x<_;x+=3){const E=x,d=x+1,l=x+2;r=Vs(this,o,t,n,u,f,p,E,d,l),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}}function up(i,t,e,n,r,s,o,a){let h;if(t.side===ze?h=n.intersectTriangle(o,s,r,!0,a):h=n.intersectTriangle(r,s,o,t.side===Fn,a),h===null)return null;zs.copy(a),zs.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(zs);return u<e.near||u>e.far?null:{distance:u,point:zs.clone(),object:i}}function Vs(i,t,e,n,r,s,o,a,h,u){i.getVertexPosition(a,Ns),i.getVertexPosition(h,Fs),i.getVertexPosition(u,Os);const f=up(i,t,e,n,Ns,Fs,Os,dh);if(f){const p=new U;he.getBarycoord(dh,Ns,Fs,Os,p),r&&(f.uv=he.getInterpolatedAttribute(r,a,h,u,p,new pt)),s&&(f.uv1=he.getInterpolatedAttribute(s,a,h,u,p,new pt)),o&&(f.normal=he.getInterpolatedAttribute(o,a,h,u,p,new U),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const g={a,b:h,c:u,normal:new U,materialIndex:0};he.getNormal(Ns,Fs,Os,g.normal),f.face=g,f.barycoord=p}return f}class qi extends zn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const h=[],u=[],f=[],p=[];let g=0,m=0;M("z","y","x",-1,-1,n,e,t,o,s,0),M("z","y","x",1,-1,n,e,-t,o,s,1),M("x","z","y",1,1,t,n,e,r,o,2),M("x","z","y",1,-1,t,n,-e,r,o,3),M("x","y","z",1,-1,t,e,n,r,s,4),M("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new Mn(u,3)),this.setAttribute("normal",new Mn(f,3)),this.setAttribute("uv",new Mn(p,2));function M(b,x,_,E,d,l,y,c,R,T,v){const S=l/R,A=y/T,w=l/2,C=y/2,N=c/2,F=R+1,B=T+1;let O=0,H=0;const K=new U;for(let nt=0;nt<B;nt++){const tt=nt*A-C;for(let ft=0;ft<F;ft++){const dt=ft*S-w;K[b]=dt*E,K[x]=tt*d,K[_]=N,u.push(K.x,K.y,K.z),K[b]=0,K[x]=0,K[_]=c>0?1:-1,f.push(K.x,K.y,K.z),p.push(ft/R),p.push(1-nt/T),O+=1}}for(let nt=0;nt<T;nt++)for(let tt=0;tt<R;tt++){const ft=g+tt+F*nt,dt=g+tt+F*(nt+1),At=g+(tt+1)+F*(nt+1),Tt=g+(tt+1)+F*nt;h.push(ft,dt,Tt),h.push(dt,At,Tt),H+=6}a.addGroup(m,H,v),m+=H,g+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ir(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=Ir(i[e]);for(const r in n)t[r]=n[r]}return t}function fp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _f(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const dp={clone:Ir,merge:Oe};var pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xf extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new U,ph=new pt,gh=new pt;class cn extends xf{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Kl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kl*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,ph,gh),e.subVectors(gh,ph)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/h,e-=o.offsetY*n/u,r*=o.width/h,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const sr=-90,or=1;class mp extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(sr,or,t,e);r.layers=this.layers,this.add(r);const s=new cn(sr,or,t,e);s.layers=this.layers,this.add(s);const o=new cn(sr,or,t,e);o.layers=this.layers,this.add(o);const a=new cn(sr,or,t,e);a.layers=this.layers,this.add(a);const h=new cn(sr,or,t,e);h.layers=this.layers,this.add(h);const u=new cn(sr,or,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,h]=e;for(const u of e)this.remove(u);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,h,u,f]=this.children,p=t.getRenderTarget(),g=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),t.render(e,f),t.setRenderTarget(p,g,m),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class vf extends Ve{constructor(t=[],e=Vi,n,r,s,o,a,h,u,f){super(t,e,n,r,s,o,a,h,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yf extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new vf(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qi(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:jn});s.uniforms.tEquirect.value=e;const o=new Ne(r,s),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=De),new mp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class ks extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _p={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const b of t.hand.values()){const x=e.getJointPose(b,n),_=this._getHandJoint(u,b);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],g=f.position.distanceTo(p.position),m=.02,M=.005;u.inputState.pinching&&g>m+M?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&g<=m-M&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return a!==null&&(a.visible=r!==null),h!==null&&(h.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ks;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class xp extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class vp extends Ve{constructor(t=null,e=1,n=1,r,s,o,a,h,u=Ce,f=Ce,p,g){super(null,o,a,h,u,f,r,s,p,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ma=new U,yp=new U,Sp=new qt;class hn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ma.subVectors(n,e).cross(yp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ma),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sp.getNormalMatrix(t),r=this.coplanarPoint(Ma).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Mc,Mp=new pt(.5,.5),Hs=new U;class Sf{constructor(t=new hn,e=new hn,n=new hn,r=new hn,s=new hn,o=new hn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],h=s[2],u=s[3],f=s[4],p=s[5],g=s[6],m=s[7],M=s[8],b=s[9],x=s[10],_=s[11],E=s[12],d=s[13],l=s[14],y=s[15];if(r[0].setComponents(u-o,m-f,_-M,y-E).normalize(),r[1].setComponents(u+o,m+f,_+M,y+E).normalize(),r[2].setComponents(u+a,m+p,_+b,y+d).normalize(),r[3].setComponents(u-a,m-p,_-b,y-d).normalize(),n)r[4].setComponents(h,g,x,l).normalize(),r[5].setComponents(u-h,m-g,_-x,y-l).normalize();else if(r[4].setComponents(u-h,m-g,_-x,y-l).normalize(),e===Dn)r[5].setComponents(u+h,m+g,_+x,y+l).normalize();else if(e===Lo)r[5].setComponents(h,g,x,l).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){Ai.center.set(0,0,0);const e=Mp.distanceTo(t.center);return Ai.radius=.7071067811865476+e,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Hs.x=r.normal.x>0?t.max.x:t.min.x,Hs.y=r.normal.y>0?t.max.y:t.min.y,Hs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hs extends Ve{constructor(t,e,n=On,r,s,o,a=Ce,h=Ce,u,f=ei,p=1){if(f!==ei&&f!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:p};super(g,r,s,o,a,h,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class bp extends hs{constructor(t,e=On,n=Vi,r,s,o=Ce,a=Ce,h,u=ei){const f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,e,n,r,s,o,a,h,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Mf extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,h=s-1,u;for(;a<=h;)if(r=Math.floor(a+(h-a)/2),u=n[r]-o,u<0)a=r+1;else if(u>0)h=r-1;else{h=r;break}if(r=h,n[r]===o)return r/(s-1);const f=n[r],g=n[r+1]-f,m=(o-f)/g;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),h=e||(o.isVector2?new pt:new U);return h.copy(a).sub(o).normalize(),h}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,r=[],s=[],o=[],a=new U,h=new Kt;for(let m=0;m<=t;m++){const M=m/t;r[m]=this.getTangentAt(M,new U)}s[0]=new U,o[0]=new U;let u=Number.MAX_VALUE;const f=Math.abs(r[0].x),p=Math.abs(r[0].y),g=Math.abs(r[0].z);f<=u&&(u=f,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),g<=u&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const M=Math.acos(Wt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(h.makeRotationAxis(a,M))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(Wt(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let M=1;M<=t;M++)s[M].applyMatrix4(h.makeRotationAxis(r[M],m*M)),o[M].crossVectors(r[M],s[M])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bc extends Vn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=h}getPoint(t,e=new pt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let h=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),g=h-this.aX,m=u-this.aY;h=g*f-m*p+this.aX,u=g*p+m*f+this.aY}return n.set(h,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ep extends bc{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ec(){let i=0,t=0,e=0,n=0;function r(s,o,a,h){i=s,t=a,e=-3*s+3*o-2*a-h,n=2*s-2*o+a+h}return{initCatmullRom:function(s,o,a,h,u){r(o,a,u*(a-s),u*(h-o))},initNonuniformCatmullRom:function(s,o,a,h,u,f,p){let g=(o-s)/u-(a-s)/(u+f)+(a-o)/f,m=(a-o)/f-(h-o)/(f+p)+(h-a)/p;g*=f,m*=f,r(o,a,g,m)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Gs=new U,ba=new Ec,Ea=new Ec,Aa=new Ec;class Ap extends Vn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new U){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),h=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:h===0&&a===s-1&&(a=s-2,h=1);let u,f;this.closed||a>0?u=r[(a-1)%s]:(Gs.subVectors(r[0],r[1]).add(r[0]),u=Gs);const p=r[a%s],g=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Gs.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Gs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let M=Math.pow(u.distanceToSquared(p),m),b=Math.pow(p.distanceToSquared(g),m),x=Math.pow(g.distanceToSquared(f),m);b<1e-4&&(b=1),M<1e-4&&(M=b),x<1e-4&&(x=b),ba.initNonuniformCatmullRom(u.x,p.x,g.x,f.x,M,b,x),Ea.initNonuniformCatmullRom(u.y,p.y,g.y,f.y,M,b,x),Aa.initNonuniformCatmullRom(u.z,p.z,g.z,f.z,M,b,x)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(u.x,p.x,g.x,f.x,this.tension),Ea.initCatmullRom(u.y,p.y,g.y,f.y,this.tension),Aa.initCatmullRom(u.z,p.z,g.z,f.z,this.tension));return n.set(ba.calc(h),Ea.calc(h),Aa.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new U().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function mh(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,h=i*a;return(2*e-2*n+s+o)*h+(-3*e+3*n-2*s-o)*a+s*i+e}function Tp(i,t){const e=1-i;return e*e*t}function wp(i,t){return 2*(1-i)*i*t}function Cp(i,t){return i*i*t}function is(i,t,e,n){return Tp(i,t)+wp(i,e)+Cp(i,n)}function Rp(i,t){const e=1-i;return e*e*e*t}function Pp(i,t){const e=1-i;return 3*e*e*i*t}function Dp(i,t){return 3*(1-i)*i*i*t}function Lp(i,t){return i*i*i*t}function rs(i,t,e,n,r){return Rp(i,t)+Pp(i,e)+Dp(i,n)+Lp(i,r)}class bf extends Vn{constructor(t=new pt,e=new pt,n=new pt,r=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new pt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rs(t,r.x,s.x,o.x,a.x),rs(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ip extends Vn{constructor(t=new U,e=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new U){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rs(t,r.x,s.x,o.x,a.x),rs(t,r.y,s.y,o.y,a.y),rs(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ef extends Vn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Up extends Vn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Af extends Vn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(is(t,r.x,s.x,o.x),is(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Np extends Vn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(is(t,r.x,s.x,o.x),is(t,r.y,s.y,o.y),is(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tf extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,h=r[o===0?o:o-1],u=r[o],f=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return n.set(mh(a,h.x,u.x,f.x,p.x),mh(a,h.y,u.y,f.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new pt().fromArray(r))}return this}}var Jl=Object.freeze({__proto__:null,ArcCurve:Ep,CatmullRomCurve3:Ap,CubicBezierCurve:bf,CubicBezierCurve3:Ip,EllipseCurve:bc,LineCurve:Ef,LineCurve3:Up,QuadraticBezierCurve:Af,QuadraticBezierCurve3:Np,SplineCurve:Tf});class Fp extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],h=a.getLength(),u=h===0?0:1-o/h;return a.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,h=o.getPoints(a);for(let u=0;u<h.length;u++){const f=h[u];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Jl[r.type]().fromJSON(r))}return this}}class _h extends Fp{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ef(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Af(this.currentPoint.clone(),new pt(t,e),new pt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new bf(this.currentPoint.clone(),new pt(t,e),new pt(n,r),new pt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Tf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+a,e+h,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,h){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+u,e+f,n,r,s,o,a,h),this}absellipse(t,e,n,r,s,o,a,h){const u=new bc(t,e,n,r,s,o,a,h);if(this.curves.length>0){const p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);const f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wf extends _h{constructor(t){super(t),this.uuid=Nr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new _h().fromJSON(r))}return this}}function Op(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Cf(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,h,u;if(n&&(s=Hp(i,t,s,e)),i.length>80*e){a=i[0],h=i[1];let f=a,p=h;for(let g=e;g<r;g+=e){const m=i[g],M=i[g+1];m<a&&(a=m),M<h&&(h=M),m>f&&(f=m),M>p&&(p=M)}u=Math.max(f-a,p-h),u=u!==0?32767/u:0}return us(s,o,e,a,h,u,0),o}function Cf(i,t,e,n,r){let s;if(r===Qp(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=xh(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=xh(o/n|0,i[o],i[o+1],s);return s&&Ur(s,s.next)&&(ds(s),s=s.next),s}function Hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ur(e,e.next)||fe(e.prev,e,e.next)===0)){if(ds(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function us(i,t,e,n,r,s,o){if(!i)return;!o&&s&&$p(i,n,r,s);let a=i;for(;i.prev!==i.next;){const h=i.prev,u=i.next;if(s?zp(i,n,r,s):Bp(i)){t.push(h.i,i.i,u.i),ds(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=Vp(Hi(i),t),us(i,t,e,n,r,s,2)):o===2&&kp(i,t,e,n,r,s):us(Hi(i),t,e,n,r,s,1);break}}}function Bp(i){const t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,h=e.y,u=n.y,f=Math.min(r,s,o),p=Math.min(a,h,u),g=Math.max(r,s,o),m=Math.max(a,h,u);let M=n.next;for(;M!==t;){if(M.x>=f&&M.x<=g&&M.y>=p&&M.y<=m&&es(r,a,s,h,o,u,M.x,M.y)&&fe(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function zp(i,t,e,n){const r=i.prev,s=i,o=i.next;if(fe(r,s,o)>=0)return!1;const a=r.x,h=s.x,u=o.x,f=r.y,p=s.y,g=o.y,m=Math.min(a,h,u),M=Math.min(f,p,g),b=Math.max(a,h,u),x=Math.max(f,p,g),_=jl(m,M,t,e,n),E=jl(b,x,t,e,n);let d=i.prevZ,l=i.nextZ;for(;d&&d.z>=_&&l&&l.z<=E;){if(d.x>=m&&d.x<=b&&d.y>=M&&d.y<=x&&d!==r&&d!==o&&es(a,f,h,p,u,g,d.x,d.y)&&fe(d.prev,d,d.next)>=0||(d=d.prevZ,l.x>=m&&l.x<=b&&l.y>=M&&l.y<=x&&l!==r&&l!==o&&es(a,f,h,p,u,g,l.x,l.y)&&fe(l.prev,l,l.next)>=0))return!1;l=l.nextZ}for(;d&&d.z>=_;){if(d.x>=m&&d.x<=b&&d.y>=M&&d.y<=x&&d!==r&&d!==o&&es(a,f,h,p,u,g,d.x,d.y)&&fe(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;l&&l.z<=E;){if(l.x>=m&&l.x<=b&&l.y>=M&&l.y<=x&&l!==r&&l!==o&&es(a,f,h,p,u,g,l.x,l.y)&&fe(l.prev,l,l.next)>=0)return!1;l=l.nextZ}return!0}function Vp(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Ur(n,r)&&Pf(n,e,e.next,r)&&fs(n,r)&&fs(r,n)&&(t.push(n.i,e.i,r.i),ds(e),ds(e.next),e=i=r),e=e.next}while(e!==i);return Hi(e)}function kp(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kp(o,a)){let h=Df(o,a);o=Hi(o,o.next),h=Hi(h,h.next),us(o,t,e,n,r,s,0),us(h,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Hp(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,h=s<o-1?t[s+1]*n:i.length,u=Cf(i,a,h,n,!1);u===u.next&&(u.steiner=!0),r.push(Zp(u))}r.sort(Gp);for(let s=0;s<r.length;s++)e=Wp(r[s],e);return e}function Gp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Wp(i,t){const e=Xp(i,t);if(!e)return t;const n=Df(e,i);return Hi(n,n.next),Hi(e,e.next)}function Xp(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(Ur(i,e))return e;do{if(Ur(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const p=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>s&&(s=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,h=o.x,u=o.y;let f=1/0;e=o;do{if(n>=e.x&&e.x>=h&&n!==e.x&&Rf(r<u?n:s,r,h,u,r<u?s:n,r,e.x,e.y)){const p=Math.abs(r-e.y)/(n-e.x);fs(e,i)&&(p<f||p===f&&(e.x>o.x||e.x===o.x&&qp(o,e)))&&(o=e,f=p)}e=e.next}while(e!==a);return o}function qp(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function $p(i,t,e,n){let r=i;do r.z===0&&(r.z=jl(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Yp(r)}function Yp(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let u=0;u<e&&(a++,o=o.nextZ,!!o);u++);let h=e;for(;a>0||h>0&&o;)a!==0&&(h===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,h--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function jl(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Zp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Rf(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function es(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Rf(i,t,e,n,r,s,o,a)}function Kp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jp(i,t)&&(fs(i,t)&&fs(t,i)&&jp(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||Ur(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ur(i,t){return i.x===t.x&&i.y===t.y}function Pf(i,t,e,n){const r=Xs(fe(i,t,e)),s=Xs(fe(i,t,n)),o=Xs(fe(e,n,i)),a=Xs(fe(e,n,t));return!!(r!==s&&o!==a||r===0&&Ws(i,e,t)||s===0&&Ws(i,n,t)||o===0&&Ws(e,i,n)||a===0&&Ws(e,t,n))}function Ws(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Xs(i){return i>0?1:i<0?-1:0}function Jp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function fs(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function jp(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Df(i,t){const e=Ql(i.i,i.x,i.y),n=Ql(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function xh(i,t,e,n){const r=Ql(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ds(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ql(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qp(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class tg{static triangulate(t,e,n=2){return Op(t,e,n)}}class br{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return br.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];vh(t),yh(n,t);let o=t.length;e.forEach(vh);for(let h=0;h<e.length;h++)r.push(o),o+=e[h].length,yh(n,e[h]);const a=tg.triangulate(n,r);for(let h=0;h<a.length;h+=3)s.push(a.slice(h,h+3));return s}}function vh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ac extends zn{constructor(t=new wf([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,h=t.length;a<h;a++){const u=t[a];o(u)}this.setAttribute("position",new Mn(r,3)),this.setAttribute("uv",new Mn(s,2)),this.computeVertexNormals();function o(a){const h=[],u=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,M=e.bevelSize!==void 0?e.bevelSize:m-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3;const _=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:eg;let d,l=!1,y,c,R,T;if(_){d=_.getSpacedPoints(f),l=!0,g=!1;const Z=_.isCatmullRomCurve3?_.closed:!1;y=_.computeFrenetFrames(f,Z),c=new U,R=new U,T=new U}g||(x=0,m=0,M=0,b=0);const v=a.extractPoints(u);let S=v.shape;const A=v.holes;if(!br.isClockWise(S)){S=S.reverse();for(let Z=0,et=A.length;Z<et;Z++){const j=A[Z];br.isClockWise(j)&&(A[Z]=j.reverse())}}function C(Z){const j=10000000000000001e-36;let st=Z[0];for(let I=1;I<=Z.length;I++){const xt=I%Z.length,lt=Z[xt],Mt=lt.x-st.x,it=lt.y-st.y,L=Mt*Mt+it*it,P=Math.max(Math.abs(lt.x),Math.abs(lt.y),Math.abs(st.x),Math.abs(st.y)),z=j*P*P;if(L<=z){Z.splice(xt,1),I--;continue}st=lt}}C(S),A.forEach(C);const N=A.length,F=S;for(let Z=0;Z<N;Z++){const et=A[Z];S=S.concat(et)}function B(Z,et,j){return et||Jt("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(et,j)}const O=S.length;function H(Z,et,j){let st,I,xt;const lt=Z.x-et.x,Mt=Z.y-et.y,it=j.x-Z.x,L=j.y-Z.y,P=lt*lt+Mt*Mt,z=lt*L-Mt*it;if(Math.abs(z)>Number.EPSILON){const W=Math.sqrt(P),Q=Math.sqrt(it*it+L*L),X=et.x-Mt/W,gt=et.y+lt/W,_t=j.x-L/Q,It=j.y+it/Q,Bt=((_t-X)*L-(It-gt)*it)/(lt*L-Mt*it);st=X+lt*Bt-Z.x,I=gt+Mt*Bt-Z.y;const ct=st*st+I*I;if(ct<=2)return new pt(st,I);xt=Math.sqrt(ct/2)}else{let W=!1;lt>Number.EPSILON?it>Number.EPSILON&&(W=!0):lt<-Number.EPSILON?it<-Number.EPSILON&&(W=!0):Math.sign(Mt)===Math.sign(L)&&(W=!0),W?(st=-Mt,I=lt,xt=Math.sqrt(P)):(st=lt,I=Mt,xt=Math.sqrt(P/2))}return new pt(st/xt,I/xt)}const K=[];for(let Z=0,et=F.length,j=et-1,st=Z+1;Z<et;Z++,j++,st++)j===et&&(j=0),st===et&&(st=0),K[Z]=H(F[Z],F[j],F[st]);const nt=[];let tt,ft=K.concat();for(let Z=0,et=N;Z<et;Z++){const j=A[Z];tt=[];for(let st=0,I=j.length,xt=I-1,lt=st+1;st<I;st++,xt++,lt++)xt===I&&(xt=0),lt===I&&(lt=0),tt[st]=H(j[st],j[xt],j[lt]);nt.push(tt),ft=ft.concat(tt)}let dt;if(x===0)dt=br.triangulateShape(F,A);else{const Z=[],et=[];for(let j=0;j<x;j++){const st=j/x,I=m*Math.cos(st*Math.PI/2),xt=M*Math.sin(st*Math.PI/2)+b;for(let lt=0,Mt=F.length;lt<Mt;lt++){const it=B(F[lt],K[lt],xt);ht(it.x,it.y,-I),st===0&&Z.push(it)}for(let lt=0,Mt=N;lt<Mt;lt++){const it=A[lt];tt=nt[lt];const L=[];for(let P=0,z=it.length;P<z;P++){const W=B(it[P],tt[P],xt);ht(W.x,W.y,-I),st===0&&L.push(W)}st===0&&et.push(L)}}dt=br.triangulateShape(Z,et)}const At=dt.length,Tt=M+b;for(let Z=0;Z<O;Z++){const et=g?B(S[Z],ft[Z],Tt):S[Z];l?(R.copy(y.normals[0]).multiplyScalar(et.x),c.copy(y.binormals[0]).multiplyScalar(et.y),T.copy(d[0]).add(R).add(c),ht(T.x,T.y,T.z)):ht(et.x,et.y,0)}for(let Z=1;Z<=f;Z++)for(let et=0;et<O;et++){const j=g?B(S[et],ft[et],Tt):S[et];l?(R.copy(y.normals[Z]).multiplyScalar(j.x),c.copy(y.binormals[Z]).multiplyScalar(j.y),T.copy(d[Z]).add(R).add(c),ht(T.x,T.y,T.z)):ht(j.x,j.y,p/f*Z)}for(let Z=x-1;Z>=0;Z--){const et=Z/x,j=m*Math.cos(et*Math.PI/2),st=M*Math.sin(et*Math.PI/2)+b;for(let I=0,xt=F.length;I<xt;I++){const lt=B(F[I],K[I],st);ht(lt.x,lt.y,p+j)}for(let I=0,xt=A.length;I<xt;I++){const lt=A[I];tt=nt[I];for(let Mt=0,it=lt.length;Mt<it;Mt++){const L=B(lt[Mt],tt[Mt],st);l?ht(L.x,L.y+d[f-1].y,d[f-1].x+j):ht(L.x,L.y,p+j)}}}$(),J();function $(){const Z=r.length/3;if(g){let et=0,j=O*et;for(let st=0;st<At;st++){const I=dt[st];at(I[2]+j,I[1]+j,I[0]+j)}et=f+x*2,j=O*et;for(let st=0;st<At;st++){const I=dt[st];at(I[0]+j,I[1]+j,I[2]+j)}}else{for(let et=0;et<At;et++){const j=dt[et];at(j[2],j[1],j[0])}for(let et=0;et<At;et++){const j=dt[et];at(j[0]+O*f,j[1]+O*f,j[2]+O*f)}}n.addGroup(Z,r.length/3-Z,0)}function J(){const Z=r.length/3;let et=0;ot(F,et),et+=F.length;for(let j=0,st=A.length;j<st;j++){const I=A[j];ot(I,et),et+=I.length}n.addGroup(Z,r.length/3-Z,1)}function ot(Z,et){let j=Z.length;for(;--j>=0;){const st=j;let I=j-1;I<0&&(I=Z.length-1);for(let xt=0,lt=f+x*2;xt<lt;xt++){const Mt=O*xt,it=O*(xt+1),L=et+st+Mt,P=et+I+Mt,z=et+I+it,W=et+st+it;Pt(L,P,z,W)}}}function ht(Z,et,j){h.push(Z),h.push(et),h.push(j)}function at(Z,et,j){Gt(Z),Gt(et),Gt(j);const st=r.length/3,I=E.generateTopUV(n,r,st-3,st-2,st-1);wt(I[0]),wt(I[1]),wt(I[2])}function Pt(Z,et,j,st){Gt(Z),Gt(et),Gt(st),Gt(et),Gt(j),Gt(st);const I=r.length/3,xt=E.generateSideWallUV(n,r,I-6,I-3,I-2,I-1);wt(xt[0]),wt(xt[1]),wt(xt[3]),wt(xt[1]),wt(xt[2]),wt(xt[3])}function Gt(Z){r.push(h[Z*3+0]),r.push(h[Z*3+1]),r.push(h[Z*3+2])}function wt(Z){s.push(Z.x),s.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ng(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Jl[r.type]().fromJSON(r)),new Ac(n,t.options)}}const eg={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],h=t[n*3+1],u=t[r*3],f=t[r*3+1];return[new pt(s,o),new pt(a,h),new pt(u,f)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],h=t[e*3+2],u=t[n*3],f=t[n*3+1],p=t[n*3+2],g=t[r*3],m=t[r*3+1],M=t[r*3+2],b=t[s*3],x=t[s*3+1],_=t[s*3+2];return Math.abs(a-f)<Math.abs(o-u)?[new pt(o,1-h),new pt(u,1-p),new pt(g,1-M),new pt(b,1-_)]:[new pt(a,1-h),new pt(f,1-p),new pt(m,1-M),new pt(x,1-_)]}};function ng(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ho extends zn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),h=Math.floor(r),u=a+1,f=h+1,p=t/a,g=e/h,m=[],M=[],b=[],x=[];for(let _=0;_<f;_++){const E=_*g-o;for(let d=0;d<u;d++){const l=d*p-s;M.push(l,-E,0),b.push(0,0,1),x.push(d/a),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let E=0;E<a;E++){const d=E+u*_,l=E+u*(_+1),y=E+1+u*(_+1),c=E+1+u*_;m.push(d,l,c),m.push(l,y,c)}this.setIndex(m),this.setAttribute("position",new Mn(M,3)),this.setAttribute("normal",new Mn(b,3)),this.setAttribute("uv",new Mn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.widthSegments,t.heightSegments)}}class ig extends Bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lf extends vs{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hf,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class rg extends vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sg extends vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class If extends xf{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,h=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class og extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Sh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Mh=new U,qs=new U,ar=new U,lr=new U,Ta=new U,ag=new U,lg=new U;class we{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Mh.subVectors(t,this.start),qs.subVectors(this.end,this.start);const n=qs.dot(qs);let s=qs.dot(Mh)/n;return e&&(s=Wt(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=ag,n=lg){const r=10000000000000001e-32;let s,o;const a=this.start,h=t.start,u=this.end,f=t.end;ar.subVectors(u,a),lr.subVectors(f,h),Ta.subVectors(a,h);const p=ar.dot(ar),g=lr.dot(lr),m=lr.dot(Ta);if(p<=r&&g<=r)return e.copy(a),n.copy(h),e.sub(n),e.dot(e);if(p<=r)s=0,o=m/g,o=Wt(o,0,1);else{const M=ar.dot(Ta);if(g<=r)o=0,s=Wt(-M/p,0,1);else{const b=ar.dot(lr),x=p*g-b*b;x!==0?s=Wt((b*m-M*g)/x,0,1):s=0,o=(b*s+m)/g,o<0?(o=0,s=Wt(-M/p,0,1)):o>1&&(o=1,s=Wt((b-M)/p,0,1))}}return e.copy(a).add(ar.multiplyScalar(s)),n.copy(h).add(lr.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class cg extends Xi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ht("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function bh(i,t,e,n){const r=hg(n);switch(e){case af:return i*t;case cf:return i*t/r.components*r.byteLength;case mc:return i*t/r.components*r.byteLength;case Dr:return i*t*2/r.components*r.byteLength;case _c:return i*t*2/r.components*r.byteLength;case lf:return i*t*3/r.components*r.byteLength;case Sn:return i*t*4/r.components*r.byteLength;case xc:return i*t*4/r.components*r.byteLength;case yo:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mo:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:case Sl:return Math.max(i,16)*Math.max(t,8)/4;case xl:case yl:return Math.max(i,8)*Math.max(t,8)/2;case Ml:case bl:case Al:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case El:case wl:case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gl:case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ql:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yl:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hg(i){switch(i){case un:case nf:return{byteLength:1,components:1};case as:case rf:case ti:return{byteLength:2,components:1};case pc:case gc:return{byteLength:2,components:4};case On:case dc:case Pn:return{byteLength:4,components:1};case sf:case of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_s}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_s);function Uf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function ug(i){const t=new WeakMap;function e(a,h){const u=a.array,f=a.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),a.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,h,u){const f=h.array,p=h.updateRanges;if(i.bindBuffer(u,a),p.length===0)i.bufferSubData(u,0,f);else{p.sort((m,M)=>m.start-M.start);let g=0;for(let m=1;m<p.length;m++){const M=p[g],b=p[m];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++g,p[g]=b)}p.length=g+1;for(let m=0,M=p.length;m<M;m++){const b=p[m];i.bufferSubData(u,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);h&&(i.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,h));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,h),u.version=a.version}}return{get:r,remove:s,update:o}}var fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ag=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ng=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Og=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,um=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,h_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,F_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,V_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:fg,alphahash_pars_fragment:dg,alphamap_fragment:pg,alphamap_pars_fragment:gg,alphatest_fragment:mg,alphatest_pars_fragment:_g,aomap_fragment:xg,aomap_pars_fragment:vg,batching_pars_vertex:yg,batching_vertex:Sg,begin_vertex:Mg,beginnormal_vertex:bg,bsdfs:Eg,iridescence_fragment:Ag,bumpmap_pars_fragment:Tg,clipping_planes_fragment:wg,clipping_planes_pars_fragment:Cg,clipping_planes_pars_vertex:Rg,clipping_planes_vertex:Pg,color_fragment:Dg,color_pars_fragment:Lg,color_pars_vertex:Ig,color_vertex:Ug,common:Ng,cube_uv_reflection_fragment:Fg,defaultnormal_vertex:Og,displacementmap_pars_vertex:Bg,displacementmap_vertex:zg,emissivemap_fragment:Vg,emissivemap_pars_fragment:kg,colorspace_fragment:Hg,colorspace_pars_fragment:Gg,envmap_fragment:Wg,envmap_common_pars_fragment:Xg,envmap_pars_fragment:qg,envmap_pars_vertex:$g,envmap_physical_pars_fragment:rm,envmap_vertex:Yg,fog_vertex:Zg,fog_pars_vertex:Kg,fog_fragment:Jg,fog_pars_fragment:jg,gradientmap_pars_fragment:Qg,lightmap_pars_fragment:tm,lights_lambert_fragment:em,lights_lambert_pars_fragment:nm,lights_pars_begin:im,lights_toon_fragment:sm,lights_toon_pars_fragment:om,lights_phong_fragment:am,lights_phong_pars_fragment:lm,lights_physical_fragment:cm,lights_physical_pars_fragment:hm,lights_fragment_begin:um,lights_fragment_maps:fm,lights_fragment_end:dm,logdepthbuf_fragment:pm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:mm,logdepthbuf_vertex:_m,map_fragment:xm,map_pars_fragment:vm,map_particle_fragment:ym,map_particle_pars_fragment:Sm,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:bm,morphinstance_vertex:Em,morphcolor_vertex:Am,morphnormal_vertex:Tm,morphtarget_pars_vertex:wm,morphtarget_vertex:Cm,normal_fragment_begin:Rm,normal_fragment_maps:Pm,normal_pars_fragment:Dm,normal_pars_vertex:Lm,normal_vertex:Im,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:Fm,clearcoat_pars_fragment:Om,iridescence_pars_fragment:Bm,opaque_fragment:zm,packing:Vm,premultiplied_alpha_fragment:km,project_vertex:Hm,dithering_fragment:Gm,dithering_pars_fragment:Wm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:qm,shadowmap_pars_fragment:$m,shadowmap_pars_vertex:Ym,shadowmap_vertex:Zm,shadowmask_pars_fragment:Km,skinbase_vertex:Jm,skinning_pars_vertex:jm,skinning_vertex:Qm,skinnormal_vertex:t_,specularmap_fragment:e_,specularmap_pars_fragment:n_,tonemapping_fragment:i_,tonemapping_pars_fragment:r_,transmission_fragment:s_,transmission_pars_fragment:o_,uv_pars_fragment:a_,uv_pars_vertex:l_,uv_vertex:c_,worldpos_vertex:h_,background_vert:u_,background_frag:f_,backgroundCube_vert:d_,backgroundCube_frag:p_,cube_vert:g_,cube_frag:m_,depth_vert:__,depth_frag:x_,distance_vert:v_,distance_frag:y_,equirect_vert:S_,equirect_frag:M_,linedashed_vert:b_,linedashed_frag:E_,meshbasic_vert:A_,meshbasic_frag:T_,meshlambert_vert:w_,meshlambert_frag:C_,meshmatcap_vert:R_,meshmatcap_frag:P_,meshnormal_vert:D_,meshnormal_frag:L_,meshphong_vert:I_,meshphong_frag:U_,meshphysical_vert:N_,meshphysical_frag:F_,meshtoon_vert:O_,meshtoon_frag:B_,points_vert:z_,points_frag:V_,shadow_vert:k_,shadow_frag:H_,sprite_vert:G_,sprite_frag:W_},Et={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Tn={basic:{uniforms:Oe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Oe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ie(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Oe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Oe([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Oe([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new ie(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Oe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Oe([Et.points,Et.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Oe([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Oe([Et.common,Et.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Oe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Oe([Et.sprite,Et.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Oe([Et.common,Et.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Oe([Et.lights,Et.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Tn.physical={uniforms:Oe([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const $s={r:0,b:0,g:0},Ti=new ni,X_=new Kt;function q_(i,t,e,n,r,s,o){const a=new ie(0);let h=s===!0?0:1,u,f,p=null,g=0,m=null;function M(d){let l=d.isScene===!0?d.background:null;return l&&l.isTexture&&(l=(d.backgroundBlurriness>0?e:t).get(l)),l}function b(d){let l=!1;const y=M(d);y===null?_(a,h):y&&y.isColor&&(_(y,1),l=!0);const c=i.xr.getEnvironmentBlendMode();c==="additive"?n.buffers.color.setClear(0,0,0,1,o):c==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||l)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(d,l){const y=M(l);y&&(y.isCubeTexture||y.mapping===Vo)?(f===void 0&&(f=new Ne(new qi(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ir(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(c,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Ti.copy(l.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=l.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(X_.makeRotationFromEuler(Ti)),f.material.toneMapped=jt.getTransfer(y.colorSpace)!==ne,(p!==y||g!==y.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,p=y,g=y.version,m=i.toneMapping),f.layers.enableAll(),d.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Ne(new Ho(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ir(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,u.material.toneMapped=jt.getTransfer(y.colorSpace)!==ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||g!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=y,g=y.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null))}function _(d,l){d.getRGB($s,_f(i)),n.buffers.color.setClear($s.r,$s.g,$s.b,l,o)}function E(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(d,l=1){a.set(d),h=l,_(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(d){h=d,_(a,h)},render:b,addToRenderList:x,dispose:E}}function $_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,o=!1;function a(S,A,w,C,N){let F=!1;const B=p(C,w,A);s!==B&&(s=B,u(s.object)),F=m(S,C,w,N),F&&M(S,C,w,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,l(S,A,w,C),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function h(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function f(S){return i.deleteVertexArray(S)}function p(S,A,w){const C=w.wireframe===!0;let N=n[S.id];N===void 0&&(N={},n[S.id]=N);let F=N[A.id];F===void 0&&(F={},N[A.id]=F);let B=F[C];return B===void 0&&(B=g(h()),F[C]=B),B}function g(S){const A=[],w=[],C=[];for(let N=0;N<e;N++)A[N]=0,w[N]=0,C[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:w,attributeDivisors:C,object:S,attributes:{},index:null}}function m(S,A,w,C){const N=s.attributes,F=A.attributes;let B=0;const O=w.getAttributes();for(const H in O)if(O[H].location>=0){const nt=N[H];let tt=F[H];if(tt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),nt===void 0||nt.attribute!==tt||tt&&nt.data!==tt.data)return!0;B++}return s.attributesNum!==B||s.index!==C}function M(S,A,w,C){const N={},F=A.attributes;let B=0;const O=w.getAttributes();for(const H in O)if(O[H].location>=0){let nt=F[H];nt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor));const tt={};tt.attribute=nt,nt&&nt.data&&(tt.data=nt.data),N[H]=tt,B++}s.attributes=N,s.attributesNum=B,s.index=C}function b(){const S=s.newAttributes;for(let A=0,w=S.length;A<w;A++)S[A]=0}function x(S){_(S,0)}function _(S,A){const w=s.newAttributes,C=s.enabledAttributes,N=s.attributeDivisors;w[S]=1,C[S]===0&&(i.enableVertexAttribArray(S),C[S]=1),N[S]!==A&&(i.vertexAttribDivisor(S,A),N[S]=A)}function E(){const S=s.newAttributes,A=s.enabledAttributes;for(let w=0,C=A.length;w<C;w++)A[w]!==S[w]&&(i.disableVertexAttribArray(w),A[w]=0)}function d(S,A,w,C,N,F,B){B===!0?i.vertexAttribIPointer(S,A,w,N,F):i.vertexAttribPointer(S,A,w,C,N,F)}function l(S,A,w,C){b();const N=C.attributes,F=w.getAttributes(),B=A.defaultAttributeValues;for(const O in F){const H=F[O];if(H.location>=0){let K=N[O];if(K===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const nt=K.normalized,tt=K.itemSize,ft=t.get(K);if(ft===void 0)continue;const dt=ft.buffer,At=ft.type,Tt=ft.bytesPerElement,$=At===i.INT||At===i.UNSIGNED_INT||K.gpuType===dc;if(K.isInterleavedBufferAttribute){const J=K.data,ot=J.stride,ht=K.offset;if(J.isInstancedInterleavedBuffer){for(let at=0;at<H.locationSize;at++)_(H.location+at,J.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let at=0;at<H.locationSize;at++)x(H.location+at);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let at=0;at<H.locationSize;at++)d(H.location+at,tt/H.locationSize,At,nt,ot*Tt,(ht+tt/H.locationSize*at)*Tt,$)}else{if(K.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)_(H.location+J,K.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let J=0;J<H.locationSize;J++)x(H.location+J);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let J=0;J<H.locationSize;J++)d(H.location+J,tt/H.locationSize,At,nt,tt*Tt,tt/H.locationSize*J*Tt,$)}}else if(B!==void 0){const nt=B[O];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(H.location,nt);break;case 3:i.vertexAttrib3fv(H.location,nt);break;case 4:i.vertexAttrib4fv(H.location,nt);break;default:i.vertexAttrib1fv(H.location,nt)}}}}E()}function y(){T();for(const S in n){const A=n[S];for(const w in A){const C=A[w];for(const N in C)f(C[N].object),delete C[N];delete A[w]}delete n[S]}}function c(S){if(n[S.id]===void 0)return;const A=n[S.id];for(const w in A){const C=A[w];for(const N in C)f(C[N].object),delete C[N];delete A[w]}delete n[S.id]}function R(S){for(const A in n){const w=n[A];if(w[S.id]===void 0)continue;const C=w[S.id];for(const N in C)f(C[N].object),delete C[N];delete w[S.id]}}function T(){v(),o=!0,s!==r&&(s=r,u(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:v,dispose:y,releaseStatesOfGeometry:c,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:x,disableUnusedAttributes:E}}function Y_(i,t,e){let n;function r(u){n=u}function s(u,f){i.drawArrays(n,u,f),e.update(f,n,1)}function o(u,f,p){p!==0&&(i.drawArraysInstanced(n,u,f,p),e.update(f,n,p))}function a(u,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,p);let m=0;for(let M=0;M<p;M++)m+=f[M];e.update(m,n,1)}function h(u,f,p,g){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<u.length;M++)o(u[M],f[M],g[M]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,f,0,g,0,p);let M=0;for(let b=0;b<p;b++)M+=f[b]*g[b];e.update(M,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function Z_(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const T=R===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Pn&&!T)}function h(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const f=h(u);f!==u&&(Ht("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const p=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),l=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),c=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:E,maxVaryings:d,maxFragmentUniforms:l,maxSamples:y,samples:c}}function K_(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new hn,a=new qt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const m=p.length!==0||g||n!==0||r;return r=g,n=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,g){e=f(p,g,0)},this.setState=function(p,g,m){const M=p.clippingPlanes,b=p.clipIntersection,x=p.clipShadows,_=i.get(p);if(!r||M===null||M.length===0||s&&!x)s?f(null):u();else{const E=s?0:n,d=E*4;let l=_.clippingState||null;h.value=l,l=f(M,g,d,m);for(let y=0;y!==d;++y)l[y]=e[y];_.clippingState=l,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(p,g,m,M){const b=p!==null?p.length:0;let x=null;if(b!==0){if(x=h.value,M!==!0||x===null){const _=m+b*4,E=g.matrixWorldInverse;a.getNormalMatrix(E),(x===null||x.length<_)&&(x=new Float32Array(_));for(let d=0,l=m;d!==b;++d,l+=4)o.copy(p[d]).applyMatrix4(E,a),o.normal.toArray(x,l),x[l+3]=o.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function J_(i){let t=new WeakMap;function e(o,a){return a===pl?o.mapping=Vi:a===gl&&(o.mapping=Pr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===pl||a===gl)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const u=new yf(h.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const mi=4,Eh=[.125,.215,.35,.446,.526,.582],Ni=20,j_=256,Wr=new If,Ah=new ie;let wa=null,Ca=0,Ra=0,Pa=!1;const Q_=new U;class Th{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=Q_}=s;wa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,r,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Ca,Ra),this._renderer.xr.enabled=Pa,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:ti,format:Sn,colorSpace:Lr,depthBuffer:!1},r=wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=t0(s)),this._blurMaterial=n0(s,t,e),this._ggxMaterial=e0(s,t,e)}return r}_compileMaterial(t){const e=new Ne(new zn,t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,r,s){const h=new cn(90,1,e,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,m=p.toneMapping;p.getClearColor(Ah),p.toneMapping=In,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new qi,new ko({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let _=!1;const E=t.background;E?E.isColor&&(x.color.copy(E),t.background=null,_=!0):(x.color.copy(Ah),_=!0);for(let d=0;d<6;d++){const l=d%3;l===0?(h.up.set(0,u[d],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+f[d],s.y,s.z)):l===1?(h.up.set(0,0,u[d]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+f[d],s.z)):(h.up.set(0,u[d],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+f[d]));const y=this._cubeSize;cr(r,l*y,d>2?y:0,y,y),p.setRenderTarget(r),_&&p.render(b,h),p.render(t,h)}p.toneMapping=m,p.autoClear=g,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Vi||t.mapping===Pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const h=this._cubeSize;cr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,Wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const h=o.uniforms,u=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),p=Math.sqrt(u*u-f*f),g=0+u*1.25,m=p*g,{_lodMax:M}=this,b=this._sizeLods[n],x=3*b*(n>M-mi?n-M+mi:0),_=4*(this._cubeSize-b);h.envMap.value=t.texture,h.roughness.value=m,h.mipInt.value=M-e,cr(s,x,_,3*b,2*b),r.setRenderTarget(s),r.render(a,Wr),h.envMap.value=s.texture,h.roughness.value=0,h.mipInt.value=M-n,cr(t,x,_,3*b,2*b),r.setRenderTarget(t),r.render(a,Wr)}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const h=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Jt("blur direction must be either latitudinal or longitudinal!");const f=3,p=this._lodMeshes[r];p.material=u;const g=u.uniforms,m=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ni-1),b=s/M,x=isFinite(s)?1+Math.floor(f*b):Ni;x>Ni&&Ht(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ni}`);const _=[];let E=0;for(let R=0;R<Ni;++R){const T=R/b,v=Math.exp(-T*T/2);_.push(v),R===0?E+=v:R<x&&(E+=2*v)}for(let R=0;R<_.length;R++)_[R]=_[R]/E;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=o==="latitudinal",a&&(g.poleAxis.value=a);const{_lodMax:d}=this;g.dTheta.value=M,g.mipInt.value=d-n;const l=this._sizeLods[r],y=3*l*(r>d-mi?r-d+mi:0),c=4*(this._cubeSize-l);cr(e,y,c,3*l,2*l),h.setRenderTarget(e),h.render(p,Wr)}}function t0(i){const t=[],e=[],n=[];let r=i;const s=i-mi+1+Eh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let h=1/a;o>i-mi?h=Eh[o-i+mi-1]:o===0&&(h=0),e.push(h);const u=1/(a-2),f=-u,p=1+u,g=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,M=6,b=3,x=2,_=1,E=new Float32Array(b*M*m),d=new Float32Array(x*M*m),l=new Float32Array(_*M*m);for(let c=0;c<m;c++){const R=c%3*2/3-1,T=c>2?0:-1,v=[R,T,0,R+2/3,T,0,R+2/3,T+1,0,R,T,0,R+2/3,T+1,0,R,T+1,0];E.set(v,b*M*c),d.set(g,x*M*c);const S=[c,c,c,c,c,c];l.set(S,_*M*c)}const y=new zn;y.setAttribute("position",new Ze(E,b)),y.setAttribute("uv",new Ze(d,x)),y.setAttribute("faceIndex",new Ze(l,_)),n.push(new Ne(y,null)),r>mi&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function wh(i,t,e){const n=new Un(i,t,e);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function e0(i,t,e){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:j_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function n0(i,t,e){const n=new Float32Array(Ni),r=new U(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ch(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Rh(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Go(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function i0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const h=a.mapping,u=h===pl||h===gl,f=h===Vi||h===Pr;if(u||f){let p=t.get(a);const g=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==g)return e===null&&(e=new Th(i)),p=u?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{const m=a.image;return u&&m&&m.height>0||f&&m&&r(m)?(e===null&&(e=new Th(i)),p=u?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let h=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&h++;return h===u}function s(a){const h=a.target;h.removeEventListener("dispose",s);const u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function r0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&cs("WebGLRenderer: "+n+" extension not supported."),r}}}function s0(i,t,e,n){const r={},s=new WeakMap;function o(p){const g=p.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",o),delete r[g.id];const m=s.get(g);m&&(t.remove(m),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function a(p,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,e.memory.geometries++),g}function h(p){const g=p.attributes;for(const m in g)t.update(g[m],i.ARRAY_BUFFER)}function u(p){const g=[],m=p.index,M=p.attributes.position;let b=0;if(m!==null){const E=m.array;b=m.version;for(let d=0,l=E.length;d<l;d+=3){const y=E[d+0],c=E[d+1],R=E[d+2];g.push(y,c,c,R,R,y)}}else if(M!==void 0){const E=M.array;b=M.version;for(let d=0,l=E.length/3-1;d<l;d+=3){const y=d+0,c=d+1,R=d+2;g.push(y,c,c,R,R,y)}}else return;const x=new(uf(g)?mf:gf)(g,1);x.version=b;const _=s.get(p);_&&t.remove(_),s.set(p,x)}function f(p){const g=s.get(p);if(g){const m=p.index;m!==null&&g.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:a,update:h,getWireframeAttribute:f}}function o0(i,t,e){let n;function r(g){n=g}let s,o;function a(g){s=g.type,o=g.bytesPerElement}function h(g,m){i.drawElements(n,m,s,g*o),e.update(m,n,1)}function u(g,m,M){M!==0&&(i.drawElementsInstanced(n,m,s,g*o,M),e.update(m,n,M))}function f(g,m,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,g,0,M);let x=0;for(let _=0;_<M;_++)x+=m[_];e.update(x,n,1)}function p(g,m,M,b){if(M===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<g.length;_++)u(g[_]/o,m[_],b[_]);else{x.multiDrawElementsInstancedWEBGL(n,m,0,s,g,0,b,0,M);let _=0;for(let E=0;E<M;E++)_+=m[E]*b[E];e.update(_,n,1)}}this.setMode=r,this.setIndex=a,this.render=h,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function a0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Jt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function l0(i,t,e){const n=new WeakMap,r=new ce;function s(o,a,h){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=f!==void 0?f.length:0;let g=n.get(a);if(g===void 0||g.count!==p){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var m=S;g!==void 0&&g.texture.dispose();const M=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],d=a.morphAttributes.color||[];let l=0;M===!0&&(l=1),b===!0&&(l=2),x===!0&&(l=3);let y=a.attributes.position.count*l,c=1;y>t.maxTextureSize&&(c=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const R=new Float32Array(y*c*4*p),T=new ff(R,y,c,p);T.type=Pn,T.needsUpdate=!0;const v=l*4;for(let A=0;A<p;A++){const w=_[A],C=E[A],N=d[A],F=y*c*4*A;for(let B=0;B<w.count;B++){const O=B*v;M===!0&&(r.fromBufferAttribute(w,B),R[F+O+0]=r.x,R[F+O+1]=r.y,R[F+O+2]=r.z,R[F+O+3]=0),b===!0&&(r.fromBufferAttribute(C,B),R[F+O+4]=r.x,R[F+O+5]=r.y,R[F+O+6]=r.z,R[F+O+7]=0),x===!0&&(r.fromBufferAttribute(N,B),R[F+O+8]=r.x,R[F+O+9]=r.y,R[F+O+10]=r.z,R[F+O+11]=N.itemSize===4?r.w:1)}}g={count:p,texture:T,size:new pt(y,c)},n.set(a,g),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let M=0;for(let x=0;x<u.length;x++)M+=u[x];const b=a.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function c0(i,t,e,n){let r=new WeakMap;function s(h){const u=n.render.frame,f=h.geometry,p=t.get(h,f);if(r.get(p)!==u&&(t.update(p),r.set(p,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){const g=h.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return p}function o(){r=new WeakMap}function a(h){const u=h.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const h0={[Yu]:"LINEAR_TONE_MAPPING",[Zu]:"REINHARD_TONE_MAPPING",[Ku]:"CINEON_TONE_MAPPING",[Ju]:"ACES_FILMIC_TONE_MAPPING",[Qu]:"AGX_TONE_MAPPING",[tf]:"NEUTRAL_TONE_MAPPING",[ju]:"CUSTOM_TONE_MAPPING"};function u0(i,t,e,n,r){const s=new Un(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Un(t,e,{type:ti,depthBuffer:!1,stencilBuffer:!1}),a=new zn;a.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Mn([0,2,0,0,2,0],2));const h=new ig({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ne(a,h),f=new If(-1,1,1,-1,0,1);let p=null,g=null,m=!1,M,b=null,x=[],_=!1;this.setSize=function(E,d){s.setSize(E,d),o.setSize(E,d);for(let l=0;l<x.length;l++){const y=x[l];y.setSize&&y.setSize(E,d)}},this.setEffects=function(E){x=E,_=x.length>0&&x[0].isRenderPass===!0;const d=s.width,l=s.height;for(let y=0;y<x.length;y++){const c=x[y];c.setSize&&c.setSize(d,l)}},this.begin=function(E,d){if(m||E.toneMapping===In&&x.length===0)return!1;if(b=d,d!==null){const l=d.width,y=d.height;(s.width!==l||s.height!==y)&&this.setSize(l,y)}return _===!1&&E.setRenderTarget(s),M=E.toneMapping,E.toneMapping=In,!0},this.hasRenderPass=function(){return _},this.end=function(E,d){E.toneMapping=M,m=!0;let l=s,y=o;for(let c=0;c<x.length;c++){const R=x[c];if(R.enabled!==!1&&(R.render(E,y,l,d),R.needsSwap!==!1)){const T=l;l=y,y=T}}if(p!==E.outputColorSpace||g!==E.toneMapping){p=E.outputColorSpace,g=E.toneMapping,h.defines={},jt.getTransfer(p)===ne&&(h.defines.SRGB_TRANSFER="");const c=h0[g];c&&(h.defines[c]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=l.texture,E.setRenderTarget(b),E.render(u,f),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),h.dispose()}}const Nf=new Ve,tc=new hs(1,1),Ff=new ff,Of=new tp,Bf=new vf,Ph=[],Dh=[],Lh=new Float32Array(16),Ih=new Float32Array(9),Uh=new Float32Array(4);function Fr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ph[r];if(s===void 0&&(s=new Float32Array(r),Ph[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wo(i,t){let e=Dh[t];e===void 0&&(e=new Int32Array(t),Dh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function f0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function m0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Uh.set(n),i.uniformMatrix2fv(this.addr,!1,Uh),be(e,n)}}function _0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Ih.set(n),i.uniformMatrix3fv(this.addr,!1,Ih),be(e,n)}}function x0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Lh.set(n),i.uniformMatrix4fv(this.addr,!1,Lh),be(e,n)}}function v0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function b0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function T0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function w0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(tc.compareFunction=e.isReversedDepthBuffer()?yc:vc,s=tc):s=Nf,e.setTexture2D(t||s,r)}function C0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Of,r)}function R0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Bf,r)}function P0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Ff,r)}function D0(i){switch(i){case 5126:return f0;case 35664:return d0;case 35665:return p0;case 35666:return g0;case 35674:return m0;case 35675:return _0;case 35676:return x0;case 5124:case 35670:return v0;case 35667:case 35671:return y0;case 35668:case 35672:return S0;case 35669:case 35673:return M0;case 5125:return b0;case 36294:return E0;case 36295:return A0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return P0}}function L0(i,t){i.uniform1fv(this.addr,t)}function I0(i,t){const e=Fr(t,this.size,2);i.uniform2fv(this.addr,e)}function U0(i,t){const e=Fr(t,this.size,3);i.uniform3fv(this.addr,e)}function N0(i,t){const e=Fr(t,this.size,4);i.uniform4fv(this.addr,e)}function F0(i,t){const e=Fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function O0(i,t){const e=Fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function B0(i,t){const e=Fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function z0(i,t){i.uniform1iv(this.addr,t)}function V0(i,t){i.uniform2iv(this.addr,t)}function k0(i,t){i.uniform3iv(this.addr,t)}function H0(i,t){i.uniform4iv(this.addr,t)}function G0(i,t){i.uniform1uiv(this.addr,t)}function W0(i,t){i.uniform2uiv(this.addr,t)}function X0(i,t){i.uniform3uiv(this.addr,t)}function q0(i,t){i.uniform4uiv(this.addr,t)}function $0(i,t,e){const n=this.cache,r=t.length,s=Wo(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),be(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=tc:o=Nf;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function Y0(i,t,e){const n=this.cache,r=t.length,s=Wo(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Of,s[o])}function Z0(i,t,e){const n=this.cache,r=t.length,s=Wo(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Bf,s[o])}function K0(i,t,e){const n=this.cache,r=t.length,s=Wo(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Ff,s[o])}function J0(i){switch(i){case 5126:return L0;case 35664:return I0;case 35665:return U0;case 35666:return N0;case 35674:return F0;case 35675:return O0;case 35676:return B0;case 5124:case 35670:return z0;case 35667:case 35671:return V0;case 35668:case 35672:return k0;case 35669:case 35673:return H0;case 5125:return G0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return K0}}class j0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=D0(e.type)}}class Q0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J0(e.type)}}class tx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function Nh(i,t){i.seq.push(t),i.map[t.id]=t}function ex(i,t,e){const n=i.name,r=n.length;for(Da.lastIndex=0;;){const s=Da.exec(n),o=Da.lastIndex;let a=s[1];const h=s[2]==="]",u=s[3];if(h&&(a=a|0),u===void 0||u==="["&&o+2===r){Nh(e,u===void 0?new j0(a,i,t):new Q0(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new tx(a),Nh(e,p)),e=p}}}class Ao{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),h=t.getUniformLocation(e,a.name);ex(a,h,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Fh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const nx=37297;let ix=0;function rx(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Oh=new qt;function sx(i){jt._getMatrix(Oh,jt.workingColorSpace,i);const t=`mat3( ${Oh.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case Do:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+rx(i.getShaderSource(t),a)}else return s}function ox(i,t){const e=sx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ax={[Yu]:"Linear",[Zu]:"Reinhard",[Ku]:"Cineon",[Ju]:"ACESFilmic",[Qu]:"AgX",[tf]:"Neutral",[ju]:"Custom"};function lx(i,t){const e=ax[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ys=new U;function cx(){jt.getLuminanceCoefficients(Ys);const i=Ys.x.toFixed(4),t=Ys.y.toFixed(4),e=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function ux(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ns(i){return i!==""}function zh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(i){return i.replace(dx,gx)}const px=new Map;function gx(i,t){let e=$t[t];if(e===void 0){const n=px.get(t);if(n!==void 0)e=$t[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ec(e)}const mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(i){return i.replace(mx,_x)}function _x(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const xx={[vo]:"SHADOWMAP_TYPE_PCF",[ts]:"SHADOWMAP_TYPE_VSM"};function vx(i){return xx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yx={[Vi]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[Vo]:"ENVMAP_TYPE_CUBE_UV"};function Sx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":yx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mx={[Pr]:"ENVMAP_MODE_REFRACTION"};function bx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Mx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ex={[$u]:"ENVMAP_BLENDING_MULTIPLY",[Ud]:"ENVMAP_BLENDING_MIX",[Nd]:"ENVMAP_BLENDING_ADD"};function Ax(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ex[i.combine]||"ENVMAP_BLENDING_NONE"}function Tx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function wx(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const h=vx(e),u=Sx(e),f=bx(e),p=Ax(e),g=Tx(e),m=hx(e),M=ux(s),b=r.createProgram();let x,_,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ns).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ns).join(`
`),_.length>0&&(_+=`
`)):(x=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),_=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?$t.tonemapping_pars_fragment:"",e.toneMapping!==In?lx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,ox("linearToOutputTexel",e.outputColorSpace),cx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),o=ec(o),o=zh(o,e),o=Vh(o,e),a=ec(a),a=zh(a,e),a=Vh(a,e),o=kh(o),a=kh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const d=E+x+o,l=E+_+a,y=Fh(r,r.VERTEX_SHADER,d),c=Fh(r,r.FRAGMENT_SHADER,l);r.attachShader(b,y),r.attachShader(b,c),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function R(A){if(i.debug.checkShaderErrors){const w=r.getProgramInfoLog(b)||"",C=r.getShaderInfoLog(y)||"",N=r.getShaderInfoLog(c)||"",F=w.trim(),B=C.trim(),O=N.trim();let H=!0,K=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,y,c);else{const nt=Bh(r,y,"vertex"),tt=Bh(r,c,"fragment");Jt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+nt+`
`+tt)}else F!==""?Ht("WebGLProgram: Program Info Log:",F):(B===""||O==="")&&(K=!1);K&&(A.diagnostics={runnable:H,programLog:F,vertexShader:{log:B,prefix:x},fragmentShader:{log:O,prefix:_}})}r.deleteShader(y),r.deleteShader(c),T=new Ao(r,b),v=fx(r,b)}let T;this.getUniforms=function(){return T===void 0&&R(this),T};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(b,nx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ix++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=y,this.fragmentShader=c,this}let Cx=0;class Rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Px(t),e.set(t,n)),n}}class Px{constructor(t){this.id=Cx++,this.code=t,this.usedTimes=0}}function Dx(i,t,e,n,r,s,o){const a=new df,h=new Rx,u=new Set,f=[],p=new Map,g=r.logarithmicDepthBuffer;let m=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(v){return u.add(v),v===0?"uv":`uv${v}`}function x(v,S,A,w,C){const N=w.fog,F=C.geometry,B=v.isMeshStandardMaterial?w.environment:null,O=(v.isMeshStandardMaterial?e:t).get(v.envMap||B),H=O&&O.mapping===Vo?O.image.height:null,K=M[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&Ht("WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const nt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=nt!==void 0?nt.length:0;let ft=0;F.morphAttributes.position!==void 0&&(ft=1),F.morphAttributes.normal!==void 0&&(ft=2),F.morphAttributes.color!==void 0&&(ft=3);let dt,At,Tt,$;if(K){const te=Tn[K];dt=te.vertexShader,At=te.fragmentShader}else dt=v.vertexShader,At=v.fragmentShader,h.update(v),Tt=h.getVertexShaderID(v),$=h.getFragmentShaderID(v);const J=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),ht=C.isInstancedMesh===!0,at=C.isBatchedMesh===!0,Pt=!!v.map,Gt=!!v.matcap,wt=!!O,Z=!!v.aoMap,et=!!v.lightMap,j=!!v.bumpMap,st=!!v.normalMap,I=!!v.displacementMap,xt=!!v.emissiveMap,lt=!!v.metalnessMap,Mt=!!v.roughnessMap,it=v.anisotropy>0,L=v.clearcoat>0,P=v.dispersion>0,z=v.iridescence>0,W=v.sheen>0,Q=v.transmission>0,X=it&&!!v.anisotropyMap,gt=L&&!!v.clearcoatMap,_t=L&&!!v.clearcoatNormalMap,It=L&&!!v.clearcoatRoughnessMap,Bt=z&&!!v.iridescenceMap,ct=z&&!!v.iridescenceThicknessMap,St=W&&!!v.sheenColorMap,Nt=W&&!!v.sheenRoughnessMap,Ft=!!v.specularMap,yt=!!v.specularColorMap,Yt=!!v.specularIntensityMap,V=Q&&!!v.transmissionMap,Rt=Q&&!!v.thicknessMap,mt=!!v.gradientMap,Dt=!!v.alphaMap,ut=v.alphaTest>0,rt=!!v.alphaHash,vt=!!v.extensions;let Xt=In;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const ae={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:dt,fragmentShader:At,defines:v.defines,customVertexShaderID:Tt,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:at,batchingColor:at&&C._colorsTexture!==null,instancing:ht,instancingColor:ht&&C.instanceColor!==null,instancingMorph:ht&&C.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Lr,alphaToCoverage:!!v.alphaToCoverage,map:Pt,matcap:Gt,envMap:wt,envMapMode:wt&&O.mapping,envMapCubeUVHeight:H,aoMap:Z,lightMap:et,bumpMap:j,normalMap:st,displacementMap:I,emissiveMap:xt,normalMapObjectSpace:st&&v.normalMapType===Bd,normalMapTangentSpace:st&&v.normalMapType===hf,metalnessMap:lt,roughnessMap:Mt,anisotropy:it,anisotropyMap:X,clearcoat:L,clearcoatMap:gt,clearcoatNormalMap:_t,clearcoatRoughnessMap:It,dispersion:P,iridescence:z,iridescenceMap:Bt,iridescenceThicknessMap:ct,sheen:W,sheenColorMap:St,sheenRoughnessMap:Nt,specularMap:Ft,specularColorMap:yt,specularIntensityMap:Yt,transmission:Q,transmissionMap:V,thicknessMap:Rt,gradientMap:mt,opaque:v.transparent===!1&&v.blending===wr&&v.alphaToCoverage===!1,alphaMap:Dt,alphaTest:ut,alphaHash:rt,combine:v.combine,mapUv:Pt&&b(v.map.channel),aoMapUv:Z&&b(v.aoMap.channel),lightMapUv:et&&b(v.lightMap.channel),bumpMapUv:j&&b(v.bumpMap.channel),normalMapUv:st&&b(v.normalMap.channel),displacementMapUv:I&&b(v.displacementMap.channel),emissiveMapUv:xt&&b(v.emissiveMap.channel),metalnessMapUv:lt&&b(v.metalnessMap.channel),roughnessMapUv:Mt&&b(v.roughnessMap.channel),anisotropyMapUv:X&&b(v.anisotropyMap.channel),clearcoatMapUv:gt&&b(v.clearcoatMap.channel),clearcoatNormalMapUv:_t&&b(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&b(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&b(v.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&b(v.iridescenceThicknessMap.channel),sheenColorMapUv:St&&b(v.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&b(v.sheenRoughnessMap.channel),specularMapUv:Ft&&b(v.specularMap.channel),specularColorMapUv:yt&&b(v.specularColorMap.channel),specularIntensityMapUv:Yt&&b(v.specularIntensityMap.channel),transmissionMapUv:V&&b(v.transmissionMap.channel),thicknessMapUv:Rt&&b(v.thicknessMap.channel),alphaMapUv:Dt&&b(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(st||it),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!F.attributes.uv&&(Pt||Dt),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ot,skinning:C.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Pt&&v.map.isVideoTexture===!0&&jt.getTransfer(v.map.colorSpace)===ne,decodeVideoTextureEmissive:xt&&v.emissiveMap.isVideoTexture===!0&&jt.getTransfer(v.emissiveMap.colorSpace)===ne,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yn,flipSided:v.side===ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:vt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&v.extensions.multiDraw===!0||at)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ae.vertexUv1s=u.has(1),ae.vertexUv2s=u.has(2),ae.vertexUv3s=u.has(3),u.clear(),ae}function _(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)S.push(A),S.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(E(S,v),d(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function E(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function d(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function l(v){const S=M[v.type];let A;if(S){const w=Tn[S];A=dp.clone(w.uniforms)}else A=v.uniforms;return A}function y(v,S){let A=p.get(S);return A!==void 0?++A.usedTimes:(A=new wx(i,S,v,s),f.push(A),p.set(S,A)),A}function c(v){if(--v.usedTimes===0){const S=f.indexOf(v);f[S]=f[f.length-1],f.pop(),p.delete(v.cacheKey),v.destroy()}}function R(v){h.remove(v)}function T(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:l,acquireProgram:y,releaseProgram:c,releaseShaderCache:R,programs:f,dispose:T}}function Lx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,h){i.get(o)[a]=h}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Ix(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(p,g,m,M,b,x){let _=i[t];return _===void 0?(_={id:p.id,object:p,geometry:g,material:m,groupOrder:M,renderOrder:p.renderOrder,z:b,group:x},i[t]=_):(_.id=p.id,_.object=p,_.geometry=g,_.material=m,_.groupOrder=M,_.renderOrder=p.renderOrder,_.z=b,_.group=x),t++,_}function a(p,g,m,M,b,x){const _=o(p,g,m,M,b,x);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):e.push(_)}function h(p,g,m,M,b,x){const _=o(p,g,m,M,b,x);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function u(p,g){e.length>1&&e.sort(p||Ix),n.length>1&&n.sort(g||Gh),r.length>1&&r.sort(g||Gh)}function f(){for(let p=t,g=i.length;p<g;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:h,finish:f,sort:u}}function Ux(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Wh,i.set(n,[o])):r>=s.length?(o=new Wh,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Nx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new ie};break;case"SpotLight":e={position:new U,direction:new U,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Fx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ox=0;function Bx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zx(i){const t=new Nx,e=Fx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new U);const r=new U,s=new Kt,o=new Kt;function a(u){let f=0,p=0,g=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let m=0,M=0,b=0,x=0,_=0,E=0,d=0,l=0,y=0,c=0,R=0;u.sort(Bx);for(let v=0,S=u.length;v<S;v++){const A=u[v],w=A.color,C=A.intensity,N=A.distance;let F=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Dr?F=A.shadow.map.texture:F=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)f+=w.r*C,p+=w.g*C,g+=w.b*C;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],C);R++}else if(A.isDirectionalLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const O=A.shadow,H=e.get(A);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=A.shadow.matrix,E++}n.directional[m]=B,m++}else if(A.isSpotLight){const B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(w).multiplyScalar(C),B.distance=N,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[b]=B;const O=A.shadow;if(A.map&&(n.spotLightMap[y]=A.map,y++,O.updateMatrices(A),A.castShadow&&c++),n.spotLightMatrix[b]=O.matrix,A.castShadow){const H=e.get(A);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,n.spotShadow[b]=H,n.spotShadowMap[b]=F,l++}b++}else if(A.isRectAreaLight){const B=t.get(A);B.color.copy(w).multiplyScalar(C),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[x]=B,x++}else if(A.isPointLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){const O=A.shadow,H=e.get(A);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,H.shadowCameraNear=O.camera.near,H.shadowCameraFar=O.camera.far,n.pointShadow[M]=H,n.pointShadowMap[M]=F,n.pointShadowMatrix[M]=A.shadow.matrix,d++}n.point[M]=B,M++}else if(A.isHemisphereLight){const B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(C),B.groundColor.copy(A.groundColor).multiplyScalar(C),n.hemi[_]=B,_++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=g;const T=n.hash;(T.directionalLength!==m||T.pointLength!==M||T.spotLength!==b||T.rectAreaLength!==x||T.hemiLength!==_||T.numDirectionalShadows!==E||T.numPointShadows!==d||T.numSpotShadows!==l||T.numSpotMaps!==y||T.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=b,n.rectArea.length=x,n.point.length=M,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=d,n.pointShadowMap.length=d,n.spotShadow.length=l,n.spotShadowMap.length=l,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=d,n.spotLightMatrix.length=l+y-c,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=c,n.numLightProbes=R,T.directionalLength=m,T.pointLength=M,T.spotLength=b,T.rectAreaLength=x,T.hemiLength=_,T.numDirectionalShadows=E,T.numPointShadows=d,T.numSpotShadows=l,T.numSpotMaps=y,T.numLightProbes=R,n.version=Ox++)}function h(u,f){let p=0,g=0,m=0,M=0,b=0;const x=f.matrixWorldInverse;for(let _=0,E=u.length;_<E;_++){const d=u[_];if(d.isDirectionalLight){const l=n.directional[p];l.direction.setFromMatrixPosition(d.matrixWorld),r.setFromMatrixPosition(d.target.matrixWorld),l.direction.sub(r),l.direction.transformDirection(x),p++}else if(d.isSpotLight){const l=n.spot[m];l.position.setFromMatrixPosition(d.matrixWorld),l.position.applyMatrix4(x),l.direction.setFromMatrixPosition(d.matrixWorld),r.setFromMatrixPosition(d.target.matrixWorld),l.direction.sub(r),l.direction.transformDirection(x),m++}else if(d.isRectAreaLight){const l=n.rectArea[M];l.position.setFromMatrixPosition(d.matrixWorld),l.position.applyMatrix4(x),o.identity(),s.copy(d.matrixWorld),s.premultiply(x),o.extractRotation(s),l.halfWidth.set(d.width*.5,0,0),l.halfHeight.set(0,d.height*.5,0),l.halfWidth.applyMatrix4(o),l.halfHeight.applyMatrix4(o),M++}else if(d.isPointLight){const l=n.point[g];l.position.setFromMatrixPosition(d.matrixWorld),l.position.applyMatrix4(x),g++}else if(d.isHemisphereLight){const l=n.hemi[b];l.direction.setFromMatrixPosition(d.matrixWorld),l.direction.transformDirection(x),b++}}}return{setup:a,setupView:h,state:n}}function Xh(i){const t=new zx(i),e=[],n=[];function r(f){u.camera=f,e.length=0,n.length=0}function s(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:h,pushLight:s,pushShadow:o}}function Vx(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Xh(i),t.set(r,[a])):s>=o.length?(a=new Xh(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gx=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Wx=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],qh=new Kt,Xr=new U,La=new U;function Xx(i,t,e){let n=new Sf;const r=new pt,s=new pt,o=new ce,a=new rg,h=new sg,u={},f=e.maxTextureSize,p={[Fn]:ze,[ze]:Fn,[yn]:yn},g=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:kx,fragmentShader:Hx}),m=g.clone();m.defines.HORIZONTAL_PASS=1;const M=new zn;M.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ne(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo;let _=this.type;this.render=function(c,R,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||c.length===0)return;c.type===gd&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),c.type=vo);const v=i.getRenderTarget(),S=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),w=i.state;w.setBlending(jn),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const C=_!==this.type;C&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(F=>F.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,F=c.length;N<F;N++){const B=c[N],O=B.shadow;if(O===void 0){Ht("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const H=O.getFrameExtents();if(r.multiply(H),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/H.x),r.x=s.x*H.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/H.y),r.y=s.y*H.y,O.mapSize.y=s.y)),O.map===null||C===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ts){if(B.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Un(r.x,r.y,{format:Dr,type:ti,minFilter:De,magFilter:De,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new hs(r.x,r.y,Pn),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=ei,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ce,O.map.depthTexture.magFilter=Ce}else{B.isPointLight?(O.map=new yf(r.x),O.map.depthTexture=new bp(r.x,On)):(O.map=new Un(r.x,r.y),O.map.depthTexture=new hs(r.x,r.y,On)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=ei;const nt=i.state.buffers.depth.getReversed();this.type===vo?(O.map.depthTexture.compareFunction=nt?yc:vc,O.map.depthTexture.minFilter=De,O.map.depthTexture.magFilter=De):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ce,O.map.depthTexture.magFilter=Ce)}O.camera.updateProjectionMatrix()}const K=O.map.isWebGLCubeRenderTarget?6:1;for(let nt=0;nt<K;nt++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(O.map),i.clear());const tt=O.getViewport(nt);o.set(s.x*tt.x,s.y*tt.y,s.x*tt.z,s.y*tt.w),w.viewport(o)}if(B.isPointLight){const tt=O.camera,ft=O.matrix,dt=B.distance||tt.far;dt!==tt.far&&(tt.far=dt,tt.updateProjectionMatrix()),Xr.setFromMatrixPosition(B.matrixWorld),tt.position.copy(Xr),La.copy(tt.position),La.add(Gx[nt]),tt.up.copy(Wx[nt]),tt.lookAt(La),tt.updateMatrixWorld(),ft.makeTranslation(-Xr.x,-Xr.y,-Xr.z),qh.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(qh,tt.coordinateSystem,tt.reversedDepth)}else O.updateMatrices(B);n=O.getFrustum(),l(R,T,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===ts&&E(O,T),O.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(v,S,A)};function E(c,R){const T=t.update(b);g.defines.VSM_SAMPLES!==c.blurSamples&&(g.defines.VSM_SAMPLES=c.blurSamples,m.defines.VSM_SAMPLES=c.blurSamples,g.needsUpdate=!0,m.needsUpdate=!0),c.mapPass===null&&(c.mapPass=new Un(r.x,r.y,{format:Dr,type:ti})),g.uniforms.shadow_pass.value=c.map.depthTexture,g.uniforms.resolution.value=c.mapSize,g.uniforms.radius.value=c.radius,i.setRenderTarget(c.mapPass),i.clear(),i.renderBufferDirect(R,null,T,g,b,null),m.uniforms.shadow_pass.value=c.mapPass.texture,m.uniforms.resolution.value=c.mapSize,m.uniforms.radius.value=c.radius,i.setRenderTarget(c.map),i.clear(),i.renderBufferDirect(R,null,T,m,b,null)}function d(c,R,T,v){let S=null;const A=T.isPointLight===!0?c.customDistanceMaterial:c.customDepthMaterial;if(A!==void 0)S=A;else if(S=T.isPointLight===!0?h:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const w=S.uuid,C=R.uuid;let N=u[w];N===void 0&&(N={},u[w]=N);let F=N[C];F===void 0&&(F=S.clone(),N[C]=F,R.addEventListener("dispose",y)),S=F}if(S.visible=R.visible,S.wireframe=R.wireframe,v===ts?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:p[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const w=i.properties.get(S);w.light=T}return S}function l(c,R,T,v,S){if(c.visible===!1)return;if(c.layers.test(R.layers)&&(c.isMesh||c.isLine||c.isPoints)&&(c.castShadow||c.receiveShadow&&S===ts)&&(!c.frustumCulled||n.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,c.matrixWorld);const C=t.update(c),N=c.material;if(Array.isArray(N)){const F=C.groups;for(let B=0,O=F.length;B<O;B++){const H=F[B],K=N[H.materialIndex];if(K&&K.visible){const nt=d(c,K,v,S);c.onBeforeShadow(i,c,R,T,C,nt,H),i.renderBufferDirect(T,null,C,nt,c,H),c.onAfterShadow(i,c,R,T,C,nt,H)}}}else if(N.visible){const F=d(c,N,v,S);c.onBeforeShadow(i,c,R,T,C,F,null),i.renderBufferDirect(T,null,C,F,c,null),c.onAfterShadow(i,c,R,T,C,F,null)}}const w=c.children;for(let C=0,N=w.length;C<N;C++)l(w[C],R,T,v,S)}function y(c){c.target.removeEventListener("dispose",y);for(const T in u){const v=u[T],S=c.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const qx={[al]:ll,[cl]:fl,[hl]:dl,[Rr]:ul,[ll]:al,[fl]:cl,[dl]:hl,[ul]:Rr};function $x(i,t){function e(){let V=!1;const Rt=new ce;let mt=null;const Dt=new ce(0,0,0,0);return{setMask:function(ut){mt!==ut&&!V&&(i.colorMask(ut,ut,ut,ut),mt=ut)},setLocked:function(ut){V=ut},setClear:function(ut,rt,vt,Xt,ae){ae===!0&&(ut*=Xt,rt*=Xt,vt*=Xt),Rt.set(ut,rt,vt,Xt),Dt.equals(Rt)===!1&&(i.clearColor(ut,rt,vt,Xt),Dt.copy(Rt))},reset:function(){V=!1,mt=null,Dt.set(-1,0,0,0)}}}function n(){let V=!1,Rt=!1,mt=null,Dt=null,ut=null;return{setReversed:function(rt){if(Rt!==rt){const vt=t.get("EXT_clip_control");rt?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),Rt=rt;const Xt=ut;ut=null,this.setClear(Xt)}},getReversed:function(){return Rt},setTest:function(rt){rt?J(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(rt){mt!==rt&&!V&&(i.depthMask(rt),mt=rt)},setFunc:function(rt){if(Rt&&(rt=qx[rt]),Dt!==rt){switch(rt){case al:i.depthFunc(i.NEVER);break;case ll:i.depthFunc(i.ALWAYS);break;case cl:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case hl:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=rt}},setLocked:function(rt){V=rt},setClear:function(rt){ut!==rt&&(Rt&&(rt=1-rt),i.clearDepth(rt),ut=rt)},reset:function(){V=!1,mt=null,Dt=null,ut=null,Rt=!1}}}function r(){let V=!1,Rt=null,mt=null,Dt=null,ut=null,rt=null,vt=null,Xt=null,ae=null;return{setTest:function(te){V||(te?J(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(te){Rt!==te&&!V&&(i.stencilMask(te),Rt=te)},setFunc:function(te,En,kn){(mt!==te||Dt!==En||ut!==kn)&&(i.stencilFunc(te,En,kn),mt=te,Dt=En,ut=kn)},setOp:function(te,En,kn){(rt!==te||vt!==En||Xt!==kn)&&(i.stencilOp(te,En,kn),rt=te,vt=En,Xt=kn)},setLocked:function(te){V=te},setClear:function(te){ae!==te&&(i.clearStencil(te),ae=te)},reset:function(){V=!1,Rt=null,mt=null,Dt=null,ut=null,rt=null,vt=null,Xt=null,ae=null}}}const s=new e,o=new n,a=new r,h=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,m=[],M=null,b=!1,x=null,_=null,E=null,d=null,l=null,y=null,c=null,R=new ie(0,0,0),T=0,v=!1,S=null,A=null,w=null,C=null,N=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,O=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=O>=1):H.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=O>=2);let K=null,nt={};const tt=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),dt=new ce().fromArray(tt),At=new ce().fromArray(ft);function Tt(V,Rt,mt,Dt){const ut=new Uint8Array(4),rt=i.createTexture();i.bindTexture(V,rt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<mt;vt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Rt,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(Rt+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return rt}const $={};$[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(Rr),j(!1),st(Xc),J(i.CULL_FACE),Z(jn);function J(V){f[V]!==!0&&(i.enable(V),f[V]=!0)}function ot(V){f[V]!==!1&&(i.disable(V),f[V]=!1)}function ht(V,Rt){return p[V]!==Rt?(i.bindFramebuffer(V,Rt),p[V]=Rt,V===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Rt),V===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Rt),!0):!1}function at(V,Rt){let mt=m,Dt=!1;if(V){mt=g.get(Rt),mt===void 0&&(mt=[],g.set(Rt,mt));const ut=V.textures;if(mt.length!==ut.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,vt=ut.length;rt<vt;rt++)mt[rt]=i.COLOR_ATTACHMENT0+rt;mt.length=ut.length,Dt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(mt)}function Pt(V){return M!==V?(i.useProgram(V),M=V,!0):!1}const Gt={[Ui]:i.FUNC_ADD,[_d]:i.FUNC_SUBTRACT,[xd]:i.FUNC_REVERSE_SUBTRACT};Gt[vd]=i.MIN,Gt[yd]=i.MAX;const wt={[Sd]:i.ZERO,[Md]:i.ONE,[bd]:i.SRC_COLOR,[sl]:i.SRC_ALPHA,[Rd]:i.SRC_ALPHA_SATURATE,[wd]:i.DST_COLOR,[Ad]:i.DST_ALPHA,[Ed]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[Cd]:i.ONE_MINUS_DST_COLOR,[Td]:i.ONE_MINUS_DST_ALPHA,[Pd]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Ld]:i.CONSTANT_ALPHA,[Id]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(V,Rt,mt,Dt,ut,rt,vt,Xt,ae,te){if(V===jn){b===!0&&(ot(i.BLEND),b=!1);return}if(b===!1&&(J(i.BLEND),b=!0),V!==md){if(V!==x||te!==v){if((_!==Ui||l!==Ui)&&(i.blendEquation(i.FUNC_ADD),_=Ui,l=Ui),te)switch(V){case wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qc:i.blendFunc(i.ONE,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",V);break}else switch(V){case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $c:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yc:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",V);break}E=null,d=null,y=null,c=null,R.set(0,0,0),T=0,x=V,v=te}return}ut=ut||Rt,rt=rt||mt,vt=vt||Dt,(Rt!==_||ut!==l)&&(i.blendEquationSeparate(Gt[Rt],Gt[ut]),_=Rt,l=ut),(mt!==E||Dt!==d||rt!==y||vt!==c)&&(i.blendFuncSeparate(wt[mt],wt[Dt],wt[rt],wt[vt]),E=mt,d=Dt,y=rt,c=vt),(Xt.equals(R)===!1||ae!==T)&&(i.blendColor(Xt.r,Xt.g,Xt.b,ae),R.copy(Xt),T=ae),x=V,v=!1}function et(V,Rt){V.side===yn?ot(i.CULL_FACE):J(i.CULL_FACE);let mt=V.side===ze;Rt&&(mt=!mt),j(mt),V.blending===wr&&V.transparent===!1?Z(jn):Z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const Dt=V.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),xt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(V){S!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),S=V)}function st(V){V!==dd?(J(i.CULL_FACE),V!==A&&(V===Xc?i.cullFace(i.BACK):V===pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),A=V}function I(V){V!==w&&(B&&i.lineWidth(V),w=V)}function xt(V,Rt,mt){V?(J(i.POLYGON_OFFSET_FILL),(C!==Rt||N!==mt)&&(i.polygonOffset(Rt,mt),C=Rt,N=mt)):ot(i.POLYGON_OFFSET_FILL)}function lt(V){V?J(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function Mt(V){V===void 0&&(V=i.TEXTURE0+F-1),K!==V&&(i.activeTexture(V),K=V)}function it(V,Rt,mt){mt===void 0&&(K===null?mt=i.TEXTURE0+F-1:mt=K);let Dt=nt[mt];Dt===void 0&&(Dt={type:void 0,texture:void 0},nt[mt]=Dt),(Dt.type!==V||Dt.texture!==Rt)&&(K!==mt&&(i.activeTexture(mt),K=mt),i.bindTexture(V,Rt||$[V]),Dt.type=V,Dt.texture=Rt)}function L(){const V=nt[K];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function P(){try{i.compressedTexImage2D(...arguments)}catch(V){Jt("WebGLState:",V)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(V){Jt("WebGLState:",V)}}function W(){try{i.texSubImage2D(...arguments)}catch(V){Jt("WebGLState:",V)}}function Q(){try{i.texSubImage3D(...arguments)}catch(V){Jt("WebGLState:",V)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Jt("WebGLState:",V)}}function gt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Jt("WebGLState:",V)}}function _t(){try{i.texStorage2D(...arguments)}catch(V){Jt("WebGLState:",V)}}function It(){try{i.texStorage3D(...arguments)}catch(V){Jt("WebGLState:",V)}}function Bt(){try{i.texImage2D(...arguments)}catch(V){Jt("WebGLState:",V)}}function ct(){try{i.texImage3D(...arguments)}catch(V){Jt("WebGLState:",V)}}function St(V){dt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),dt.copy(V))}function Nt(V){At.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),At.copy(V))}function Ft(V,Rt){let mt=u.get(Rt);mt===void 0&&(mt=new WeakMap,u.set(Rt,mt));let Dt=mt.get(V);Dt===void 0&&(Dt=i.getUniformBlockIndex(Rt,V.name),mt.set(V,Dt))}function yt(V,Rt){const Dt=u.get(Rt).get(V);h.get(Rt)!==Dt&&(i.uniformBlockBinding(Rt,Dt,V.__bindingPointIndex),h.set(Rt,Dt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},K=null,nt={},p={},g=new WeakMap,m=[],M=null,b=!1,x=null,_=null,E=null,d=null,l=null,y=null,c=null,R=new ie(0,0,0),T=0,v=!1,S=null,A=null,w=null,C=null,N=null,dt.set(0,0,i.canvas.width,i.canvas.height),At.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:ot,bindFramebuffer:ht,drawBuffers:at,useProgram:Pt,setBlending:Z,setMaterial:et,setFlipSided:j,setCullFace:st,setLineWidth:I,setPolygonOffset:xt,setScissorTest:lt,activeTexture:Mt,bindTexture:it,unbindTexture:L,compressedTexImage2D:P,compressedTexImage3D:z,texImage2D:Bt,texImage3D:ct,updateUBOMapping:Ft,uniformBlockBinding:yt,texStorage2D:_t,texStorage3D:It,texSubImage2D:W,texSubImage3D:Q,compressedTexSubImage2D:X,compressedTexSubImage3D:gt,scissor:St,viewport:Nt,reset:Yt}}function Yx(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new pt,f=new WeakMap;let p;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,P){return m?new OffscreenCanvas(L,P):Io("canvas")}function b(L,P,z){let W=1;const Q=it(L);if((Q.width>z||Q.height>z)&&(W=z/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const X=Math.floor(W*Q.width),gt=Math.floor(W*Q.height);p===void 0&&(p=M(X,gt));const _t=P?M(X,gt):p;return _t.width=X,_t.height=gt,_t.getContext("2d").drawImage(L,0,0,X,gt),Ht("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+gt+")."),_t}else return"data"in L&&Ht("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function x(L){return L.generateMipmaps}function _(L){i.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function d(L,P,z,W,Q=!1){if(L!==null){if(i[L]!==void 0)return i[L];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let X=P;if(P===i.RED&&(z===i.FLOAT&&(X=i.R32F),z===i.HALF_FLOAT&&(X=i.R16F),z===i.UNSIGNED_BYTE&&(X=i.R8)),P===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.R8UI),z===i.UNSIGNED_SHORT&&(X=i.R16UI),z===i.UNSIGNED_INT&&(X=i.R32UI),z===i.BYTE&&(X=i.R8I),z===i.SHORT&&(X=i.R16I),z===i.INT&&(X=i.R32I)),P===i.RG&&(z===i.FLOAT&&(X=i.RG32F),z===i.HALF_FLOAT&&(X=i.RG16F),z===i.UNSIGNED_BYTE&&(X=i.RG8)),P===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RG8UI),z===i.UNSIGNED_SHORT&&(X=i.RG16UI),z===i.UNSIGNED_INT&&(X=i.RG32UI),z===i.BYTE&&(X=i.RG8I),z===i.SHORT&&(X=i.RG16I),z===i.INT&&(X=i.RG32I)),P===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGB8UI),z===i.UNSIGNED_SHORT&&(X=i.RGB16UI),z===i.UNSIGNED_INT&&(X=i.RGB32UI),z===i.BYTE&&(X=i.RGB8I),z===i.SHORT&&(X=i.RGB16I),z===i.INT&&(X=i.RGB32I)),P===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),z===i.UNSIGNED_INT&&(X=i.RGBA32UI),z===i.BYTE&&(X=i.RGBA8I),z===i.SHORT&&(X=i.RGBA16I),z===i.INT&&(X=i.RGBA32I)),P===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),P===i.RGBA){const gt=Q?Do:jt.getTransfer(W);z===i.FLOAT&&(X=i.RGBA32F),z===i.HALF_FLOAT&&(X=i.RGBA16F),z===i.UNSIGNED_BYTE&&(X=gt===ne?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function l(L,P){let z;return L?P===null||P===On||P===ls?z=i.DEPTH24_STENCIL8:P===Pn?z=i.DEPTH32F_STENCIL8:P===as&&(z=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===On||P===ls?z=i.DEPTH_COMPONENT24:P===Pn?z=i.DEPTH_COMPONENT32F:P===as&&(z=i.DEPTH_COMPONENT16),z}function y(L,P){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ce&&L.minFilter!==De?Math.log2(Math.max(P.width,P.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?P.mipmaps.length:1}function c(L){const P=L.target;P.removeEventListener("dispose",c),T(P),P.isVideoTexture&&f.delete(P)}function R(L){const P=L.target;P.removeEventListener("dispose",R),S(P)}function T(L){const P=n.get(L);if(P.__webglInit===void 0)return;const z=L.source,W=g.get(z);if(W){const Q=W[P.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(L),Object.keys(W).length===0&&g.delete(z)}n.remove(L)}function v(L){const P=n.get(L);i.deleteTexture(P.__webglTexture);const z=L.source,W=g.get(z);delete W[P.__cacheKey],o.memory.textures--}function S(L){const P=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(P.__webglFramebuffer[W]))for(let Q=0;Q<P.__webglFramebuffer[W].length;Q++)i.deleteFramebuffer(P.__webglFramebuffer[W][Q]);else i.deleteFramebuffer(P.__webglFramebuffer[W]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[W])}else{if(Array.isArray(P.__webglFramebuffer))for(let W=0;W<P.__webglFramebuffer.length;W++)i.deleteFramebuffer(P.__webglFramebuffer[W]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let W=0;W<P.__webglColorRenderbuffer.length;W++)P.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[W]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const z=L.textures;for(let W=0,Q=z.length;W<Q;W++){const X=n.get(z[W]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(z[W])}n.remove(L)}let A=0;function w(){A=0}function C(){const L=A;return L>=r.maxTextures&&Ht("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),A+=1,L}function N(L){const P=[];return P.push(L.wrapS),P.push(L.wrapT),P.push(L.wrapR||0),P.push(L.magFilter),P.push(L.minFilter),P.push(L.anisotropy),P.push(L.internalFormat),P.push(L.format),P.push(L.type),P.push(L.generateMipmaps),P.push(L.premultiplyAlpha),P.push(L.flipY),P.push(L.unpackAlignment),P.push(L.colorSpace),P.join()}function F(L,P){const z=n.get(L);if(L.isVideoTexture&&lt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&z.__version!==L.version){const W=L.image;if(W===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,L,P);return}}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+P)}function B(L,P){const z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){$(z,L,P);return}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+P)}function O(L,P){const z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){$(z,L,P);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+P)}function H(L,P){const z=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&z.__version!==L.version){J(z,L,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+P)}const K={[ml]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[_l]:i.MIRRORED_REPEAT},nt={[Ce]:i.NEAREST,[Fd]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[De]:i.LINEAR,[Qo]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},tt={[zd]:i.NEVER,[Wd]:i.ALWAYS,[Vd]:i.LESS,[vc]:i.LEQUAL,[kd]:i.EQUAL,[yc]:i.GEQUAL,[Hd]:i.GREATER,[Gd]:i.NOTEQUAL};function ft(L,P){if(P.type===Pn&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===De||P.magFilter===Qo||P.magFilter===Es||P.magFilter===Fi||P.minFilter===De||P.minFilter===Qo||P.minFilter===Es||P.minFilter===Fi)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,K[P.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,K[P.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,K[P.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,nt[P.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,nt[P.minFilter]),P.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,tt[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Ce||P.minFilter!==Es&&P.minFilter!==Fi||P.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function dt(L,P){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,P.addEventListener("dispose",c));const W=P.source;let Q=g.get(W);Q===void 0&&(Q={},g.set(W,Q));const X=N(P);if(X!==L.__cacheKey){Q[X]===void 0&&(Q[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[X].usedTimes++;const gt=Q[L.__cacheKey];gt!==void 0&&(Q[L.__cacheKey].usedTimes--,gt.usedTimes===0&&v(P)),L.__cacheKey=X,L.__webglTexture=Q[X].texture}return z}function At(L,P,z){return Math.floor(Math.floor(L/z)/P)}function Tt(L,P,z,W){const X=L.updateRanges;if(X.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,z,W,P.data);else{X.sort((ct,St)=>ct.start-St.start);let gt=0;for(let ct=1;ct<X.length;ct++){const St=X[gt],Nt=X[ct],Ft=St.start+St.count,yt=At(Nt.start,P.width,4),Yt=At(St.start,P.width,4);Nt.start<=Ft+1&&yt===Yt&&At(Nt.start+Nt.count-1,P.width,4)===yt?St.count=Math.max(St.count,Nt.start+Nt.count-St.start):(++gt,X[gt]=Nt)}X.length=gt+1;const _t=i.getParameter(i.UNPACK_ROW_LENGTH),It=i.getParameter(i.UNPACK_SKIP_PIXELS),Bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let ct=0,St=X.length;ct<St;ct++){const Nt=X[ct],Ft=Math.floor(Nt.start/4),yt=Math.ceil(Nt.count/4),Yt=Ft%P.width,V=Math.floor(Ft/P.width),Rt=yt,mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,Yt,V,Rt,mt,z,W,P.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_t),i.pixelStorei(i.UNPACK_SKIP_PIXELS,It),i.pixelStorei(i.UNPACK_SKIP_ROWS,Bt)}}function $(L,P,z){let W=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(W=i.TEXTURE_3D);const Q=dt(L,P),X=P.source;e.bindTexture(W,L.__webglTexture,i.TEXTURE0+z);const gt=n.get(X);if(X.version!==gt.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);const _t=jt.getPrimaries(jt.workingColorSpace),It=P.colorSpace===pi?null:jt.getPrimaries(P.colorSpace),Bt=P.colorSpace===pi||_t===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let ct=b(P.image,!1,r.maxTextureSize);ct=Mt(P,ct);const St=s.convert(P.format,P.colorSpace),Nt=s.convert(P.type);let Ft=d(P.internalFormat,St,Nt,P.colorSpace,P.isVideoTexture);ft(W,P);let yt;const Yt=P.mipmaps,V=P.isVideoTexture!==!0,Rt=gt.__version===void 0||Q===!0,mt=X.dataReady,Dt=y(P,ct);if(P.isDepthTexture)Ft=l(P.format===Oi,P.type),Rt&&(V?e.texStorage2D(i.TEXTURE_2D,1,Ft,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,St,Nt,null));else if(P.isDataTexture)if(Yt.length>0){V&&Rt&&e.texStorage2D(i.TEXTURE_2D,Dt,Ft,Yt[0].width,Yt[0].height);for(let ut=0,rt=Yt.length;ut<rt;ut++)yt=Yt[ut],V?mt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,yt.width,yt.height,St,Nt,yt.data):e.texImage2D(i.TEXTURE_2D,ut,Ft,yt.width,yt.height,0,St,Nt,yt.data);P.generateMipmaps=!1}else V?(Rt&&e.texStorage2D(i.TEXTURE_2D,Dt,Ft,ct.width,ct.height),mt&&Tt(P,ct,St,Nt)):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,St,Nt,ct.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){V&&Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ft,Yt[0].width,Yt[0].height,ct.depth);for(let ut=0,rt=Yt.length;ut<rt;ut++)if(yt=Yt[ut],P.format!==Sn)if(St!==null)if(V){if(mt)if(P.layerUpdates.size>0){const vt=bh(yt.width,yt.height,P.format,P.type);for(const Xt of P.layerUpdates){const ae=yt.data.subarray(Xt*vt/yt.data.BYTES_PER_ELEMENT,(Xt+1)*vt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,Xt,yt.width,yt.height,1,St,ae)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,yt.width,yt.height,ct.depth,St,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Ft,yt.width,yt.height,ct.depth,0,yt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,yt.width,yt.height,ct.depth,St,Nt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Ft,yt.width,yt.height,ct.depth,0,St,Nt,yt.data)}else{V&&Rt&&e.texStorage2D(i.TEXTURE_2D,Dt,Ft,Yt[0].width,Yt[0].height);for(let ut=0,rt=Yt.length;ut<rt;ut++)yt=Yt[ut],P.format!==Sn?St!==null?V?mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,yt.width,yt.height,St,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Ft,yt.width,yt.height,0,yt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?mt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,yt.width,yt.height,St,Nt,yt.data):e.texImage2D(i.TEXTURE_2D,ut,Ft,yt.width,yt.height,0,St,Nt,yt.data)}else if(P.isDataArrayTexture)if(V){if(Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ft,ct.width,ct.height,ct.depth),mt)if(P.layerUpdates.size>0){const ut=bh(ct.width,ct.height,P.format,P.type);for(const rt of P.layerUpdates){const vt=ct.data.subarray(rt*ut/ct.data.BYTES_PER_ELEMENT,(rt+1)*ut/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,ct.width,ct.height,1,St,Nt,vt)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,St,Nt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ct.width,ct.height,ct.depth,0,St,Nt,ct.data);else if(P.isData3DTexture)V?(Rt&&e.texStorage3D(i.TEXTURE_3D,Dt,Ft,ct.width,ct.height,ct.depth),mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,St,Nt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ct.width,ct.height,ct.depth,0,St,Nt,ct.data);else if(P.isFramebufferTexture){if(Rt)if(V)e.texStorage2D(i.TEXTURE_2D,Dt,Ft,ct.width,ct.height);else{let ut=ct.width,rt=ct.height;for(let vt=0;vt<Dt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Ft,ut,rt,0,St,Nt,null),ut>>=1,rt>>=1}}else if(Yt.length>0){if(V&&Rt){const ut=it(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Ft,ut.width,ut.height)}for(let ut=0,rt=Yt.length;ut<rt;ut++)yt=Yt[ut],V?mt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,St,Nt,yt):e.texImage2D(i.TEXTURE_2D,ut,Ft,St,Nt,yt);P.generateMipmaps=!1}else if(V){if(Rt){const ut=it(ct);e.texStorage2D(i.TEXTURE_2D,Dt,Ft,ut.width,ut.height)}mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Nt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Ft,St,Nt,ct);x(P)&&_(W),gt.__version=X.version,P.onUpdate&&P.onUpdate(P)}L.__version=P.version}function J(L,P,z){if(P.image.length!==6)return;const W=dt(L,P),Q=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+z);const X=n.get(Q);if(Q.version!==X.__version||W===!0){e.activeTexture(i.TEXTURE0+z);const gt=jt.getPrimaries(jt.workingColorSpace),_t=P.colorSpace===pi?null:jt.getPrimaries(P.colorSpace),It=P.colorSpace===pi||gt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Bt=P.isCompressedTexture||P.image[0].isCompressedTexture,ct=P.image[0]&&P.image[0].isDataTexture,St=[];for(let rt=0;rt<6;rt++)!Bt&&!ct?St[rt]=b(P.image[rt],!0,r.maxCubemapSize):St[rt]=ct?P.image[rt].image:P.image[rt],St[rt]=Mt(P,St[rt]);const Nt=St[0],Ft=s.convert(P.format,P.colorSpace),yt=s.convert(P.type),Yt=d(P.internalFormat,Ft,yt,P.colorSpace),V=P.isVideoTexture!==!0,Rt=X.__version===void 0||W===!0,mt=Q.dataReady;let Dt=y(P,Nt);ft(i.TEXTURE_CUBE_MAP,P);let ut;if(Bt){V&&Rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Yt,Nt.width,Nt.height);for(let rt=0;rt<6;rt++){ut=St[rt].mipmaps;for(let vt=0;vt<ut.length;vt++){const Xt=ut[vt];P.format!==Sn?Ft!==null?V?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt,0,0,Xt.width,Xt.height,Ft,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt,Yt,Xt.width,Xt.height,0,Xt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt,0,0,Xt.width,Xt.height,Ft,yt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt,Yt,Xt.width,Xt.height,0,Ft,yt,Xt.data)}}}else{if(ut=P.mipmaps,V&&Rt){ut.length>0&&Dt++;const rt=it(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Yt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ct){V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,St[rt].width,St[rt].height,Ft,yt,St[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Yt,St[rt].width,St[rt].height,0,Ft,yt,St[rt].data);for(let vt=0;vt<ut.length;vt++){const ae=ut[vt].image[rt].image;V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt+1,0,0,ae.width,ae.height,Ft,yt,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt+1,Yt,ae.width,ae.height,0,Ft,yt,ae.data)}}else{V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ft,yt,St[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Yt,Ft,yt,St[rt]);for(let vt=0;vt<ut.length;vt++){const Xt=ut[vt];V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt+1,0,0,Ft,yt,Xt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt+1,Yt,Ft,yt,Xt.image[rt])}}}x(P)&&_(i.TEXTURE_CUBE_MAP),X.__version=Q.version,P.onUpdate&&P.onUpdate(P)}L.__version=P.version}function ot(L,P,z,W,Q,X){const gt=s.convert(z.format,z.colorSpace),_t=s.convert(z.type),It=d(z.internalFormat,gt,_t,z.colorSpace),Bt=n.get(P),ct=n.get(z);if(ct.__renderTarget=P,!Bt.__hasExternalTextures){const St=Math.max(1,P.width>>X),Nt=Math.max(1,P.height>>X);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,X,It,St,Nt,P.depth,0,gt,_t,null):e.texImage2D(Q,X,It,St,Nt,0,gt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),xt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Q,ct.__webglTexture,0,I(P)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Q,ct.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(L,P,z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),P.depthBuffer){const W=P.depthTexture,Q=W&&W.isDepthTexture?W.type:null,X=l(P.stencilBuffer,Q),gt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(P),X,P.width,P.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(P),X,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,X,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,L)}else{const W=P.textures;for(let Q=0;Q<W.length;Q++){const X=W[Q],gt=s.convert(X.format,X.colorSpace),_t=s.convert(X.type),It=d(X.internalFormat,gt,_t,X.colorSpace);xt(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(P),It,P.width,P.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(P),It,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,It,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(L,P,z){const W=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(P.depthTexture);if(Q.__renderTarget=P,(!Q.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),W){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,P.depthTexture.addEventListener("dispose",c)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ft(i.TEXTURE_CUBE_MAP,P.depthTexture);const Bt=s.convert(P.depthTexture.format),ct=s.convert(P.depthTexture.type);let St;P.depthTexture.format===ei?St=i.DEPTH_COMPONENT24:P.depthTexture.format===Oi&&(St=i.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,St,P.width,P.height,0,Bt,ct,null)}}else F(P.depthTexture,0);const X=Q.__webglTexture,gt=I(P),_t=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,It=P.depthTexture.format===Oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===ei)xt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,_t,X,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,It,_t,X,0);else if(P.depthTexture.format===Oi)xt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,_t,X,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,It,_t,X,0);else throw new Error("Unknown depthTexture format")}function Pt(L){const P=n.get(L),z=L.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==L.depthTexture){const W=L.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),W){const Q=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),P.__depthDisposeCallback=Q}P.__boundDepthTexture=W}if(L.depthTexture&&!P.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)at(P.__webglFramebuffer[W],L,W);else{const W=L.texture.mipmaps;W&&W.length>0?at(P.__webglFramebuffer[0],L,0):at(P.__webglFramebuffer,L,0)}else if(z){P.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[W]),P.__webglDepthbuffer[W]===void 0)P.__webglDepthbuffer[W]=i.createRenderbuffer(),ht(P.__webglDepthbuffer[W],L,!1);else{const Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=P.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,X)}}else{const W=L.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),ht(P.__webglDepthbuffer,L,!1);else{const Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(L,P,z){const W=n.get(L);P!==void 0&&ot(W.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Pt(L)}function wt(L){const P=L.texture,z=n.get(L),W=n.get(P);L.addEventListener("dispose",R);const Q=L.textures,X=L.isWebGLCubeRenderTarget===!0,gt=Q.length>1;if(gt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=P.version,o.memory.textures++),X){z.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0){z.__webglFramebuffer[_t]=[];for(let It=0;It<P.mipmaps.length;It++)z.__webglFramebuffer[_t][It]=i.createFramebuffer()}else z.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){z.__webglFramebuffer=[];for(let _t=0;_t<P.mipmaps.length;_t++)z.__webglFramebuffer[_t]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(gt)for(let _t=0,It=Q.length;_t<It;_t++){const Bt=n.get(Q[_t]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&xt(L)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let _t=0;_t<Q.length;_t++){const It=Q[_t];z.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[_t]);const Bt=s.convert(It.format,It.colorSpace),ct=s.convert(It.type),St=d(It.internalFormat,Bt,ct,It.colorSpace,L.isXRRenderTarget===!0),Nt=I(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,St,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,z.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(z.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ft(i.TEXTURE_CUBE_MAP,P);for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0)for(let It=0;It<P.mipmaps.length;It++)ot(z.__webglFramebuffer[_t][It],L,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It);else ot(z.__webglFramebuffer[_t],L,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);x(P)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let _t=0,It=Q.length;_t<It;_t++){const Bt=Q[_t],ct=n.get(Bt);let St=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(St=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,ct.__webglTexture),ft(St,Bt),ot(z.__webglFramebuffer,L,Bt,i.COLOR_ATTACHMENT0+_t,St,0),x(Bt)&&_(St)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_t=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,W.__webglTexture),ft(_t,P),P.mipmaps&&P.mipmaps.length>0)for(let It=0;It<P.mipmaps.length;It++)ot(z.__webglFramebuffer[It],L,P,i.COLOR_ATTACHMENT0,_t,It);else ot(z.__webglFramebuffer,L,P,i.COLOR_ATTACHMENT0,_t,0);x(P)&&_(_t),e.unbindTexture()}L.depthBuffer&&Pt(L)}function Z(L){const P=L.textures;for(let z=0,W=P.length;z<W;z++){const Q=P[z];if(x(Q)){const X=E(L),gt=n.get(Q).__webglTexture;e.bindTexture(X,gt),_(X),e.unbindTexture()}}}const et=[],j=[];function st(L){if(L.samples>0){if(xt(L)===!1){const P=L.textures,z=L.width,W=L.height;let Q=i.COLOR_BUFFER_BIT;const X=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(L),_t=P.length>1;if(_t)for(let Bt=0;Bt<P.length;Bt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const It=L.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Bt=0;Bt<P.length;Bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Bt]);const ct=n.get(P[Bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,z,W,0,0,z,W,Q,i.NEAREST),h===!0&&(et.length=0,j.length=0,et.push(i.COLOR_ATTACHMENT0+Bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(et.push(X),j.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Bt=0;Bt<P.length;Bt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Bt]);const ct=n.get(P[Bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const P=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function I(L){return Math.min(r.maxSamples,L.samples)}function xt(L){const P=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function lt(L){const P=o.render.frame;f.get(L)!==P&&(f.set(L,P),L.update())}function Mt(L,P){const z=L.colorSpace,W=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||z!==Lr&&z!==pi&&(jt.getTransfer(z)===ne?(W!==Sn||Q!==un)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",z)),P}function it(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=C,this.resetTextureUnits=w,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=H,this.rebindTextures=Gt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Zx(i,t){function e(n,r=pi){let s;const o=jt.getTransfer(r);if(n===un)return i.UNSIGNED_BYTE;if(n===pc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===of)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nf)return i.BYTE;if(n===rf)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===dc)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===af)return i.ALPHA;if(n===lf)return i.RGB;if(n===Sn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===cf)return i.RED;if(n===mc)return i.RED_INTEGER;if(n===Dr)return i.RG;if(n===_c)return i.RG_INTEGER;if(n===xc)return i.RGBA_INTEGER;if(n===yo||n===So||n===Mo||n===bo)if(o===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===vl||n===yl||n===Sl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===bl||n===El||n===Al||n===Tl||n===wl||n===Cl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ml||n===bl)return o===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===El)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Al)return s.COMPRESSED_R11_EAC;if(n===Tl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===wl)return s.COMPRESSED_RG11_EAC;if(n===Cl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rl||n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===zl||n===Vl||n===kl||n===Hl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Rl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ll)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Il)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ol)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Wl||n===Xl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Gl)return o===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ql||n===$l||n===Yl||n===Zl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ql)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Mf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Bn({vertexShader:Kx,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new Ho(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qx extends Xi{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",h=1,u=null,f=null,p=null,g=null,m=null,M=null;const b=typeof XRWebGLBinding<"u",x=new jx,_={},E=e.getContextAttributes();let d=null,l=null;const y=[],c=[],R=new pt;let T=null;const v=new cn;v.viewport=new ce;const S=new cn;S.viewport=new ce;const A=[v,S],w=new og;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=y[$];return J===void 0&&(J=new Sa,y[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=y[$];return J===void 0&&(J=new Sa,y[$]=J),J.getGripSpace()},this.getHand=function($){let J=y[$];return J===void 0&&(J=new Sa,y[$]=J),J.getHandSpace()};function F($){const J=c.indexOf($.inputSource);if(J===-1)return;const ot=y[J];ot!==void 0&&(ot.update($.inputSource,$.frame,u||o),ot.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",O);for(let $=0;$<y.length;$++){const J=c[$];J!==null&&(c[$]=null,y[$].disconnect(J))}C=null,N=null,x.reset();for(const $ in _)delete _[$];t.setRenderTarget(d),m=null,g=null,p=null,r=null,l=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return g!==null?g:m},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",B),r.addEventListener("inputsourceschange",O),E.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,ht=null,at=null;E.depth&&(at=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=E.stencil?Oi:ei,ht=E.stencil?ls:On);const Pt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};p=this.getBinding(),g=p.createProjectionLayer(Pt),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),l=new Un(g.textureWidth,g.textureHeight,{format:Sn,type:un,depthTexture:new hs(g.textureWidth,g.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ot={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),l=new Un(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}l.isXRRenderTarget=!0,this.setFoveation(h),u=null,o=await r.requestReferenceSpace(a),Tt.setContext(r),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O($){for(let J=0;J<$.removed.length;J++){const ot=$.removed[J],ht=c.indexOf(ot);ht>=0&&(c[ht]=null,y[ht].disconnect(ot))}for(let J=0;J<$.added.length;J++){const ot=$.added[J];let ht=c.indexOf(ot);if(ht===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=c.length){c.push(ot),ht=Pt;break}else if(c[Pt]===null){c[Pt]=ot,ht=Pt;break}if(ht===-1)break}const at=y[ht];at&&at.connect(ot)}}const H=new U,K=new U;function nt($,J,ot){H.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(ot.matrixWorld);const ht=H.distanceTo(K),at=J.projectionMatrix.elements,Pt=ot.projectionMatrix.elements,Gt=at[14]/(at[10]-1),wt=at[14]/(at[10]+1),Z=(at[9]+1)/at[5],et=(at[9]-1)/at[5],j=(at[8]-1)/at[0],st=(Pt[8]+1)/Pt[0],I=Gt*j,xt=Gt*st,lt=ht/(-j+st),Mt=lt*-j;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Mt),$.translateZ(lt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),at[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const it=Gt+lt,L=wt+lt,P=I-Mt,z=xt+(ht-Mt),W=Z*wt/L*it,Q=et*wt/L*it;$.projectionMatrix.makePerspective(P,z,W,Q,it,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function tt($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let J=$.near,ot=$.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(ot=x.depthFar)),w.near=S.near=v.near=J,w.far=S.far=v.far=ot,(C!==w.near||N!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,N=w.far),w.layers.mask=$.layers.mask|6,v.layers.mask=w.layers.mask&3,S.layers.mask=w.layers.mask&5;const ht=$.parent,at=w.cameras;tt(w,ht);for(let Pt=0;Pt<at.length;Pt++)tt(at[Pt],ht);at.length===2?nt(w,v,S):w.projectionMatrix.copy(v.projectionMatrix),ft($,w,ht)};function ft($,J,ot){ot===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(ot.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Kl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(g===null&&m===null))return h},this.setFoveation=function($){h=$,g!==null&&(g.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)},this.getCameraTexture=function($){return _[$]};let dt=null;function At($,J){if(f=J.getViewerPose(u||o),M=J,f!==null){const ot=f.views;m!==null&&(t.setRenderTargetFramebuffer(l,m.framebuffer),t.setRenderTarget(l));let ht=!1;ot.length!==w.cameras.length&&(w.cameras.length=0,ht=!0);for(let wt=0;wt<ot.length;wt++){const Z=ot[wt];let et=null;if(m!==null)et=m.getViewport(Z);else{const st=p.getViewSubImage(g,Z);et=st.viewport,wt===0&&(t.setRenderTargetTextures(l,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(l))}let j=A[wt];j===void 0&&(j=new cn,j.layers.enable(wt),j.viewport=new ce,A[wt]=j),j.matrix.fromArray(Z.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Z.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(et.x,et.y,et.width,et.height),wt===0&&(w.matrix.copy(j.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ht===!0&&w.cameras.push(j)}const at=r.enabledFeatures;if(at&&at.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){p=n.getBinding();const wt=p.getDepthInformation(ot[0]);wt&&wt.isValid&&wt.texture&&x.init(wt,r.renderState)}if(at&&at.includes("camera-access")&&b){t.state.unbindTexture(),p=n.getBinding();for(let wt=0;wt<ot.length;wt++){const Z=ot[wt].camera;if(Z){let et=_[Z];et||(et=new Mf,_[Z]=et);const j=p.getCameraImage(Z);et.sourceTexture=j}}}}for(let ot=0;ot<y.length;ot++){const ht=c[ot],at=y[ot];ht!==null&&at!==void 0&&at.update(ht,J,u||o)}dt&&dt($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),M=null}const Tt=new Uf;Tt.setAnimationLoop(At),this.setAnimationLoop=function($){dt=$},this.dispose=function(){}}}const wi=new ni,tv=new Kt;function ev(i,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,_f(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function r(x,_,E,d,l){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),p(x,_)):_.isMeshPhongMaterial?(s(x,_),f(x,_)):_.isMeshStandardMaterial?(s(x,_),g(x,_),_.isMeshPhysicalMaterial&&m(x,_,l)):_.isMeshMatcapMaterial?(s(x,_),M(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),b(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&a(x,_)):_.isPointsMaterial?h(x,_,E,d):_.isSpriteMaterial?u(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===ze&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===ze&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const E=t.get(_),d=E.envMap,l=E.envMapRotation;d&&(x.envMap.value=d,wi.copy(l),wi.x*=-1,wi.y*=-1,wi.z*=-1,d.isCubeTexture&&d.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),x.envMapRotation.value.setFromMatrix4(tv.makeRotationFromEuler(wi)),x.flipEnvMap.value=d.isCubeTexture&&d.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function a(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,E,d){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*E,x.scale.value=d*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function m(x,_,E){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ze&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,_){_.matcap&&(x.matcap.value=_.matcap)}function b(x,_){const E=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function nv(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(E,d){const l=d.program;n.uniformBlockBinding(E,l)}function u(E,d){let l=r[E.id];l===void 0&&(M(E),l=f(E),r[E.id]=l,E.addEventListener("dispose",x));const y=d.program;n.updateUBOMapping(E,y);const c=t.render.frame;s[E.id]!==c&&(g(E),s[E.id]=c)}function f(E){const d=p();E.__bindingPointIndex=d;const l=i.createBuffer(),y=E.__size,c=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,l),i.bufferData(i.UNIFORM_BUFFER,y,c),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,d,l),l}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(E){const d=r[E.id],l=E.uniforms,y=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,d);for(let c=0,R=l.length;c<R;c++){const T=Array.isArray(l[c])?l[c]:[l[c]];for(let v=0,S=T.length;v<S;v++){const A=T[v];if(m(A,c,v,y)===!0){const w=A.__offset,C=Array.isArray(A.value)?A.value:[A.value];let N=0;for(let F=0;F<C.length;F++){const B=C[F],O=b(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,w+N,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,N),N+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,w,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,d,l,y){const c=E.value,R=d+"_"+l;if(y[R]===void 0)return typeof c=="number"||typeof c=="boolean"?y[R]=c:y[R]=c.clone(),!0;{const T=y[R];if(typeof c=="number"||typeof c=="boolean"){if(T!==c)return y[R]=c,!0}else if(T.equals(c)===!1)return T.copy(c),!0}return!1}function M(E){const d=E.uniforms;let l=0;const y=16;for(let R=0,T=d.length;R<T;R++){const v=Array.isArray(d[R])?d[R]:[d[R]];for(let S=0,A=v.length;S<A;S++){const w=v[S],C=Array.isArray(w.value)?w.value:[w.value];for(let N=0,F=C.length;N<F;N++){const B=C[N],O=b(B),H=l%y,K=H%O.boundary,nt=H+K;l+=K,nt!==0&&y-nt<O.storage&&(l+=y-nt),w.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=l,l+=O.storage}}}const c=l%y;return c>0&&(l+=y-c),E.__size=l,E.__cache={},this}function b(E){const d={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(d.boundary=4,d.storage=4):E.isVector2?(d.boundary=8,d.storage=8):E.isVector3||E.isColor?(d.boundary=16,d.storage=12):E.isVector4?(d.boundary=16,d.storage=16):E.isMatrix3?(d.boundary=48,d.storage=48):E.isMatrix4?(d.boundary=64,d.storage=64):E.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ht("WebGLRenderer: Unsupported uniform value type.",E),d}function x(E){const d=E.target;d.removeEventListener("dispose",x);const l=o.indexOf(d.__bindingPointIndex);o.splice(l,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}function _(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:h,update:u,dispose:_}}const iv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let An=null;function rv(){return An===null&&(An=new vp(iv,16,16,Dr,ti),An.name="DFG_LUT",An.minFilter=De,An.magFilter=De,An.wrapS=Jn,An.wrapT=Jn,An.generateMipmaps=!1,An.needsUpdate=!0),An}class sv{constructor(t={}){const{canvas:e=Xd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1,outputBufferType:m=un}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=o;const b=m,x=new Set([xc,_c,mc]),_=new Set([un,On,as,ls,pc,gc]),E=new Uint32Array(4),d=new Int32Array(4);let l=null,y=null;const c=[],R=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=ln;let A=0,w=0,C=null,N=-1,F=null;const B=new ce,O=new ce;let H=null;const K=new ie(0);let nt=0,tt=e.width,ft=e.height,dt=1,At=null,Tt=null;const $=new ce(0,0,tt,ft),J=new ce(0,0,tt,ft);let ot=!1;const ht=new Sf;let at=!1,Pt=!1;const Gt=new Kt,wt=new U,Z=new ce,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function st(){return C===null?dt:1}let I=n;function xt(D,k){return e.getContext(D,k)}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_s}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",te,!1),I===null){const k="webgl2";if(I=xt(k,D),I===null)throw xt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Jt("WebGLRenderer: "+D.message),D}let lt,Mt,it,L,P,z,W,Q,X,gt,_t,It,Bt,ct,St,Nt,Ft,yt,Yt,V,Rt,mt,Dt,ut;function rt(){lt=new r0(I),lt.init(),mt=new Zx(I,lt),Mt=new Z_(I,lt,t,mt),it=new $x(I,lt),Mt.reversedDepthBuffer&&g&&it.buffers.depth.setReversed(!0),L=new a0(I),P=new Lx,z=new Yx(I,lt,it,P,Mt,mt,L),W=new J_(v),Q=new i0(v),X=new ug(I),Dt=new $_(I,X),gt=new s0(I,X,L,Dt),_t=new c0(I,gt,X,L),Yt=new l0(I,Mt,z),Nt=new K_(P),It=new Dx(v,W,Q,lt,Mt,Dt,Nt),Bt=new ev(v,P),ct=new Ux,St=new Vx(lt),yt=new q_(v,W,Q,it,_t,M,h),Ft=new Xx(v,_t,Mt),ut=new nv(I,L,Mt,it),V=new Y_(I,lt,L),Rt=new o0(I,lt,L),L.programs=It.programs,v.capabilities=Mt,v.extensions=lt,v.properties=P,v.renderLists=ct,v.shadowMap=Ft,v.state=it,v.info=L}rt(),b!==un&&(T=new u0(b,e.width,e.height,r,s));const vt=new Qx(v,I);this.xr=vt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const D=lt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=lt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(D){D!==void 0&&(dt=D,this.setSize(tt,ft,!1))},this.getSize=function(D){return D.set(tt,ft)},this.setSize=function(D,k,Y=!0){if(vt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=D,ft=k,e.width=Math.floor(D*dt),e.height=Math.floor(k*dt),Y===!0&&(e.style.width=D+"px",e.style.height=k+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,D,k)},this.getDrawingBufferSize=function(D){return D.set(tt*dt,ft*dt).floor()},this.setDrawingBufferSize=function(D,k,Y){tt=D,ft=k,dt=Y,e.width=Math.floor(D*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,D,k)},this.setEffects=function(D){if(b===un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let k=0;k<D.length;k++)if(D[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(B)},this.getViewport=function(D){return D.copy($)},this.setViewport=function(D,k,Y,q){D.isVector4?$.set(D.x,D.y,D.z,D.w):$.set(D,k,Y,q),it.viewport(B.copy($).multiplyScalar(dt).round())},this.getScissor=function(D){return D.copy(J)},this.setScissor=function(D,k,Y,q){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,k,Y,q),it.scissor(O.copy(J).multiplyScalar(dt).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(D){it.setScissorTest(ot=D)},this.setOpaqueSort=function(D){At=D},this.setTransparentSort=function(D){Tt=D},this.getClearColor=function(D){return D.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(D=!0,k=!0,Y=!0){let q=0;if(D){let G=!1;if(C!==null){const bt=C.texture.format;G=x.has(bt)}if(G){const bt=C.texture.type,Lt=_.has(bt),Ct=yt.getClearColor(),Ut=yt.getClearAlpha(),Ot=Ct.r,kt=Ct.g,zt=Ct.b;Lt?(E[0]=Ot,E[1]=kt,E[2]=zt,E[3]=Ut,I.clearBufferuiv(I.COLOR,0,E)):(d[0]=Ot,d[1]=kt,d[2]=zt,d[3]=Ut,I.clearBufferiv(I.COLOR,0,d))}else q|=I.COLOR_BUFFER_BIT}k&&(q|=I.DEPTH_BUFFER_BIT),Y&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",te,!1),yt.dispose(),ct.dispose(),St.dispose(),P.dispose(),W.dispose(),Q.dispose(),_t.dispose(),Dt.dispose(),ut.dispose(),It.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Bc),vt.removeEventListener("sessionend",zc),yi.stop()};function Xt(D){D.preventDefault(),Qc("WebGLRenderer: Context Lost."),S=!0}function ae(){Qc("WebGLRenderer: Context Restored."),S=!1;const D=L.autoReset,k=Ft.enabled,Y=Ft.autoUpdate,q=Ft.needsUpdate,G=Ft.type;rt(),L.autoReset=D,Ft.enabled=k,Ft.autoUpdate=Y,Ft.needsUpdate=q,Ft.type=G}function te(D){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function En(D){const k=D.target;k.removeEventListener("dispose",En),kn(k)}function kn(D){sd(D),P.remove(D)}function sd(D){const k=P.get(D).programs;k!==void 0&&(k.forEach(function(Y){It.releaseProgram(Y)}),D.isShaderMaterial&&It.releaseShaderCache(D))}this.renderBufferDirect=function(D,k,Y,q,G,bt){k===null&&(k=et);const Lt=G.isMesh&&G.matrixWorld.determinant()<0,Ct=ad(D,k,Y,q,G);it.setMaterial(q,Lt);let Ut=Y.index,Ot=1;if(q.wireframe===!0){if(Ut=gt.getWireframeAttribute(Y),Ut===void 0)return;Ot=2}const kt=Y.drawRange,zt=Y.attributes.position;let Zt=kt.start*Ot,re=(kt.start+kt.count)*Ot;bt!==null&&(Zt=Math.max(Zt,bt.start*Ot),re=Math.min(re,(bt.start+bt.count)*Ot)),Ut!==null?(Zt=Math.max(Zt,0),re=Math.min(re,Ut.count)):zt!=null&&(Zt=Math.max(Zt,0),re=Math.min(re,zt.count));const de=re-Zt;if(de<0||de===1/0)return;Dt.setup(G,q,Ct,Y,Ut);let pe,oe=V;if(Ut!==null&&(pe=X.get(Ut),oe=Rt,oe.setIndex(pe)),G.isMesh)q.wireframe===!0?(it.setLineWidth(q.wireframeLinewidth*st()),oe.setMode(I.LINES)):oe.setMode(I.TRIANGLES);else if(G.isLine){let Vt=q.linewidth;Vt===void 0&&(Vt=1),it.setLineWidth(Vt*st()),G.isLineSegments?oe.setMode(I.LINES):G.isLineLoop?oe.setMode(I.LINE_LOOP):oe.setMode(I.LINE_STRIP)}else G.isPoints?oe.setMode(I.POINTS):G.isSprite&&oe.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)cs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))oe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Vt=G._multiDrawStarts,ee=G._multiDrawCounts,Qt=G._multiDrawCount,Je=Ut?X.get(Ut).bytesPerElement:1,$i=P.get(q).currentProgram.getUniforms();for(let je=0;je<Qt;je++)$i.setValue(I,"_gl_DrawID",je),oe.render(Vt[je]/Je,ee[je])}else if(G.isInstancedMesh)oe.renderInstances(Zt,de,G.count);else if(Y.isInstancedBufferGeometry){const Vt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ee=Math.min(Y.instanceCount,Vt);oe.renderInstances(Zt,de,ee)}else oe.render(Zt,de)};function Oc(D,k,Y){D.transparent===!0&&D.side===yn&&D.forceSinglePass===!1?(D.side=ze,D.needsUpdate=!0,bs(D,k,Y),D.side=Fn,D.needsUpdate=!0,bs(D,k,Y),D.side=yn):bs(D,k,Y)}this.compile=function(D,k,Y=null){Y===null&&(Y=D),y=St.get(Y),y.init(k),R.push(y),Y.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),D!==Y&&D.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights();const q=new Set;return D.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const bt=G.material;if(bt)if(Array.isArray(bt))for(let Lt=0;Lt<bt.length;Lt++){const Ct=bt[Lt];Oc(Ct,Y,G),q.add(Ct)}else Oc(bt,Y,G),q.add(bt)}),y=R.pop(),q},this.compileAsync=function(D,k,Y=null){const q=this.compile(D,k,Y);return new Promise(G=>{function bt(){if(q.forEach(function(Lt){P.get(Lt).currentProgram.isReady()&&q.delete(Lt)}),q.size===0){G(D);return}setTimeout(bt,10)}lt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Ko=null;function od(D){Ko&&Ko(D)}function Bc(){yi.stop()}function zc(){yi.start()}const yi=new Uf;yi.setAnimationLoop(od),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(D){Ko=D,vt.setAnimationLoop(D),D===null?yi.stop():yi.start()},vt.addEventListener("sessionstart",Bc),vt.addEventListener("sessionend",zc),this.render=function(D,k){if(k!==void 0&&k.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const Y=vt.enabled===!0&&vt.isPresenting===!0,q=T!==null&&(C===null||Y)&&T.begin(v,C);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(k),k=vt.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,k,C),y=St.get(D,R.length),y.init(k),R.push(y),Gt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ht.setFromProjectionMatrix(Gt,Dn,k.reversedDepth),Pt=this.localClippingEnabled,at=Nt.init(this.clippingPlanes,Pt),l=ct.get(D,c.length),l.init(),c.push(l),vt.enabled===!0&&vt.isPresenting===!0){const Lt=v.xr.getDepthSensingMesh();Lt!==null&&Jo(Lt,k,-1/0,v.sortObjects)}Jo(D,k,0,v.sortObjects),l.finish(),v.sortObjects===!0&&l.sort(At,Tt),j=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,j&&yt.addToRenderList(l,D),this.info.render.frame++,at===!0&&Nt.beginShadows();const G=y.state.shadowsArray;if(Ft.render(G,D,k),at===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&T.hasRenderPass())===!1){const Lt=l.opaque,Ct=l.transmissive;if(y.setupLights(),k.isArrayCamera){const Ut=k.cameras;if(Ct.length>0)for(let Ot=0,kt=Ut.length;Ot<kt;Ot++){const zt=Ut[Ot];kc(Lt,Ct,D,zt)}j&&yt.render(D);for(let Ot=0,kt=Ut.length;Ot<kt;Ot++){const zt=Ut[Ot];Vc(l,D,zt,zt.viewport)}}else Ct.length>0&&kc(Lt,Ct,D,k),j&&yt.render(D),Vc(l,D,k)}C!==null&&w===0&&(z.updateMultisampleRenderTarget(C),z.updateRenderTargetMipmap(C)),q&&T.end(v),D.isScene===!0&&D.onAfterRender(v,D,k),Dt.resetDefaultState(),N=-1,F=null,R.pop(),R.length>0?(y=R[R.length-1],at===!0&&Nt.setGlobalState(v.clippingPlanes,y.state.camera)):y=null,c.pop(),c.length>0?l=c[c.length-1]:l=null};function Jo(D,k,Y,q){if(D.visible===!1)return;if(D.layers.test(k.layers)){if(D.isGroup)Y=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(k);else if(D.isLight)y.pushLight(D),D.castShadow&&y.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ht.intersectsSprite(D)){q&&Z.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Gt);const Lt=_t.update(D),Ct=D.material;Ct.visible&&l.push(D,Lt,Ct,Y,Z.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ht.intersectsObject(D))){const Lt=_t.update(D),Ct=D.material;if(q&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Z.copy(D.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Z.copy(Lt.boundingSphere.center)),Z.applyMatrix4(D.matrixWorld).applyMatrix4(Gt)),Array.isArray(Ct)){const Ut=Lt.groups;for(let Ot=0,kt=Ut.length;Ot<kt;Ot++){const zt=Ut[Ot],Zt=Ct[zt.materialIndex];Zt&&Zt.visible&&l.push(D,Lt,Zt,Y,Z.z,zt)}}else Ct.visible&&l.push(D,Lt,Ct,Y,Z.z,null)}}const bt=D.children;for(let Lt=0,Ct=bt.length;Lt<Ct;Lt++)Jo(bt[Lt],k,Y,q)}function Vc(D,k,Y,q){const{opaque:G,transmissive:bt,transparent:Lt}=D;y.setupLightsView(Y),at===!0&&Nt.setGlobalState(v.clippingPlanes,Y),q&&it.viewport(B.copy(q)),G.length>0&&Ms(G,k,Y),bt.length>0&&Ms(bt,k,Y),Lt.length>0&&Ms(Lt,k,Y),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function kc(D,k,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[q.id]===void 0){const Zt=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[q.id]=new Un(1,1,{generateMipmaps:!0,type:Zt?ti:un,minFilter:Fi,samples:Mt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const bt=y.state.transmissionRenderTarget[q.id],Lt=q.viewport||B;bt.setSize(Lt.z*v.transmissionResolutionScale,Lt.w*v.transmissionResolutionScale);const Ct=v.getRenderTarget(),Ut=v.getActiveCubeFace(),Ot=v.getActiveMipmapLevel();v.setRenderTarget(bt),v.getClearColor(K),nt=v.getClearAlpha(),nt<1&&v.setClearColor(16777215,.5),v.clear(),j&&yt.render(Y);const kt=v.toneMapping;v.toneMapping=In;const zt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),y.setupLightsView(q),at===!0&&Nt.setGlobalState(v.clippingPlanes,q),Ms(D,Y,q),z.updateMultisampleRenderTarget(bt),z.updateRenderTargetMipmap(bt),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let re=0,de=k.length;re<de;re++){const pe=k[re],{object:oe,geometry:Vt,material:ee,group:Qt}=pe;if(ee.side===yn&&oe.layers.test(q.layers)){const Je=ee.side;ee.side=ze,ee.needsUpdate=!0,Hc(oe,Y,q,Vt,ee,Qt),ee.side=Je,ee.needsUpdate=!0,Zt=!0}}Zt===!0&&(z.updateMultisampleRenderTarget(bt),z.updateRenderTargetMipmap(bt))}v.setRenderTarget(Ct,Ut,Ot),v.setClearColor(K,nt),zt!==void 0&&(q.viewport=zt),v.toneMapping=kt}function Ms(D,k,Y){const q=k.isScene===!0?k.overrideMaterial:null;for(let G=0,bt=D.length;G<bt;G++){const Lt=D[G],{object:Ct,geometry:Ut,group:Ot}=Lt;let kt=Lt.material;kt.allowOverride===!0&&q!==null&&(kt=q),Ct.layers.test(Y.layers)&&Hc(Ct,k,Y,Ut,kt,Ot)}}function Hc(D,k,Y,q,G,bt){D.onBeforeRender(v,k,Y,q,G,bt),D.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),G.onBeforeRender(v,k,Y,q,D,bt),G.transparent===!0&&G.side===yn&&G.forceSinglePass===!1?(G.side=ze,G.needsUpdate=!0,v.renderBufferDirect(Y,k,q,G,D,bt),G.side=Fn,G.needsUpdate=!0,v.renderBufferDirect(Y,k,q,G,D,bt),G.side=yn):v.renderBufferDirect(Y,k,q,G,D,bt),D.onAfterRender(v,k,Y,q,G,bt)}function bs(D,k,Y){k.isScene!==!0&&(k=et);const q=P.get(D),G=y.state.lights,bt=y.state.shadowsArray,Lt=G.state.version,Ct=It.getParameters(D,G.state,bt,k,Y),Ut=It.getProgramCacheKey(Ct);let Ot=q.programs;q.environment=D.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(D.isMeshStandardMaterial?Q:W).get(D.envMap||q.environment),q.envMapRotation=q.environment!==null&&D.envMap===null?k.environmentRotation:D.envMapRotation,Ot===void 0&&(D.addEventListener("dispose",En),Ot=new Map,q.programs=Ot);let kt=Ot.get(Ut);if(kt!==void 0){if(q.currentProgram===kt&&q.lightsStateVersion===Lt)return Wc(D,Ct),kt}else Ct.uniforms=It.getUniforms(D),D.onBeforeCompile(Ct,v),kt=It.acquireProgram(Ct,Ut),Ot.set(Ut,kt),q.uniforms=Ct.uniforms;const zt=q.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(zt.clippingPlanes=Nt.uniform),Wc(D,Ct),q.needsLights=cd(D),q.lightsStateVersion=Lt,q.needsLights&&(zt.ambientLightColor.value=G.state.ambient,zt.lightProbe.value=G.state.probe,zt.directionalLights.value=G.state.directional,zt.directionalLightShadows.value=G.state.directionalShadow,zt.spotLights.value=G.state.spot,zt.spotLightShadows.value=G.state.spotShadow,zt.rectAreaLights.value=G.state.rectArea,zt.ltc_1.value=G.state.rectAreaLTC1,zt.ltc_2.value=G.state.rectAreaLTC2,zt.pointLights.value=G.state.point,zt.pointLightShadows.value=G.state.pointShadow,zt.hemisphereLights.value=G.state.hemi,zt.directionalShadowMap.value=G.state.directionalShadowMap,zt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,zt.spotShadowMap.value=G.state.spotShadowMap,zt.spotLightMatrix.value=G.state.spotLightMatrix,zt.spotLightMap.value=G.state.spotLightMap,zt.pointShadowMap.value=G.state.pointShadowMap,zt.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=kt,q.uniformsList=null,kt}function Gc(D){if(D.uniformsList===null){const k=D.currentProgram.getUniforms();D.uniformsList=Ao.seqWithValue(k.seq,D.uniforms)}return D.uniformsList}function Wc(D,k){const Y=P.get(D);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function ad(D,k,Y,q,G){k.isScene!==!0&&(k=et),z.resetTextureUnits();const bt=k.fog,Lt=q.isMeshStandardMaterial?k.environment:null,Ct=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Lr,Ut=(q.isMeshStandardMaterial?Q:W).get(q.envMap||Lt),Ot=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,kt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),zt=!!Y.morphAttributes.position,Zt=!!Y.morphAttributes.normal,re=!!Y.morphAttributes.color;let de=In;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(de=v.toneMapping);const pe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=pe!==void 0?pe.length:0,Vt=P.get(q),ee=y.state.lights;if(at===!0&&(Pt===!0||D!==F)){const Fe=D===F&&q.id===N;Nt.setState(q,D,Fe)}let Qt=!1;q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ee.state.version||Vt.outputColorSpace!==Ct||G.isBatchedMesh&&Vt.batching===!1||!G.isBatchedMesh&&Vt.batching===!0||G.isBatchedMesh&&Vt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Vt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Vt.instancing===!1||!G.isInstancedMesh&&Vt.instancing===!0||G.isSkinnedMesh&&Vt.skinning===!1||!G.isSkinnedMesh&&Vt.skinning===!0||G.isInstancedMesh&&Vt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Vt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Vt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Vt.instancingMorph===!1&&G.morphTexture!==null||Vt.envMap!==Ut||q.fog===!0&&Vt.fog!==bt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Nt.numPlanes||Vt.numIntersection!==Nt.numIntersection)||Vt.vertexAlphas!==Ot||Vt.vertexTangents!==kt||Vt.morphTargets!==zt||Vt.morphNormals!==Zt||Vt.morphColors!==re||Vt.toneMapping!==de||Vt.morphTargetsCount!==oe)&&(Qt=!0):(Qt=!0,Vt.__version=q.version);let Je=Vt.currentProgram;Qt===!0&&(Je=bs(q,k,G));let $i=!1,je=!1,Br=!1;const le=Je.getUniforms(),Ge=Vt.uniforms;if(it.useProgram(Je.program)&&($i=!0,je=!0,Br=!0),q.id!==N&&(N=q.id,je=!0),$i||F!==D){it.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),le.setValue(I,"projectionMatrix",D.projectionMatrix),le.setValue(I,"viewMatrix",D.matrixWorldInverse);const We=le.map.cameraPosition;We!==void 0&&We.setValue(I,wt.setFromMatrixPosition(D.matrixWorld)),Mt.logarithmicDepthBuffer&&le.setValue(I,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&le.setValue(I,"isOrthographic",D.isOrthographicCamera===!0),F!==D&&(F=D,je=!0,Br=!0)}if(Vt.needsLights&&(ee.state.directionalShadowMap.length>0&&le.setValue(I,"directionalShadowMap",ee.state.directionalShadowMap,z),ee.state.spotShadowMap.length>0&&le.setValue(I,"spotShadowMap",ee.state.spotShadowMap,z),ee.state.pointShadowMap.length>0&&le.setValue(I,"pointShadowMap",ee.state.pointShadowMap,z)),G.isSkinnedMesh){le.setOptional(I,G,"bindMatrix"),le.setOptional(I,G,"bindMatrixInverse");const Fe=G.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),le.setValue(I,"boneTexture",Fe.boneTexture,z))}G.isBatchedMesh&&(le.setOptional(I,G,"batchingTexture"),le.setValue(I,"batchingTexture",G._matricesTexture,z),le.setOptional(I,G,"batchingIdTexture"),le.setValue(I,"batchingIdTexture",G._indirectTexture,z),le.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&le.setValue(I,"batchingColorTexture",G._colorsTexture,z));const sn=Y.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Yt.update(G,Y,Je),(je||Vt.receiveShadow!==G.receiveShadow)&&(Vt.receiveShadow=G.receiveShadow,le.setValue(I,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ge.envMap.value=Ut,Ge.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Ge.envMapIntensity.value=k.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=rv()),je&&(le.setValue(I,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&ld(Ge,Br),bt&&q.fog===!0&&Bt.refreshFogUniforms(Ge,bt),Bt.refreshMaterialUniforms(Ge,q,dt,ft,y.state.transmissionRenderTarget[D.id]),Ao.upload(I,Gc(Vt),Ge,z)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ao.upload(I,Gc(Vt),Ge,z),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&le.setValue(I,"center",G.center),le.setValue(I,"modelViewMatrix",G.modelViewMatrix),le.setValue(I,"normalMatrix",G.normalMatrix),le.setValue(I,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Fe=q.uniformsGroups;for(let We=0,jo=Fe.length;We<jo;We++){const Si=Fe[We];ut.update(Si,Je),ut.bind(Si,Je)}}return Je}function ld(D,k){D.ambientLightColor.needsUpdate=k,D.lightProbe.needsUpdate=k,D.directionalLights.needsUpdate=k,D.directionalLightShadows.needsUpdate=k,D.pointLights.needsUpdate=k,D.pointLightShadows.needsUpdate=k,D.spotLights.needsUpdate=k,D.spotLightShadows.needsUpdate=k,D.rectAreaLights.needsUpdate=k,D.hemisphereLights.needsUpdate=k}function cd(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(D,k,Y){const q=P.get(D);q.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),P.get(D.texture).__webglTexture=k,P.get(D.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,k){const Y=P.get(D);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const hd=I.createFramebuffer();this.setRenderTarget=function(D,k=0,Y=0){C=D,A=k,w=Y;let q=null,G=!1,bt=!1;if(D){const Ct=P.get(D);if(Ct.__useDefaultFramebuffer!==void 0){it.bindFramebuffer(I.FRAMEBUFFER,Ct.__webglFramebuffer),B.copy(D.viewport),O.copy(D.scissor),H=D.scissorTest,it.viewport(B),it.scissor(O),it.setScissorTest(H),N=-1;return}else if(Ct.__webglFramebuffer===void 0)z.setupRenderTarget(D);else if(Ct.__hasExternalTextures)z.rebindTextures(D,P.get(D.texture).__webglTexture,P.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const kt=D.depthTexture;if(Ct.__boundDepthTexture!==kt){if(kt!==null&&P.has(kt)&&(D.width!==kt.image.width||D.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(D)}}const Ut=D.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(bt=!0);const Ot=P.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ot[k])?q=Ot[k][Y]:q=Ot[k],G=!0):D.samples>0&&z.useMultisampledRTT(D)===!1?q=P.get(D).__webglMultisampledFramebuffer:Array.isArray(Ot)?q=Ot[Y]:q=Ot,B.copy(D.viewport),O.copy(D.scissor),H=D.scissorTest}else B.copy($).multiplyScalar(dt).floor(),O.copy(J).multiplyScalar(dt).floor(),H=ot;if(Y!==0&&(q=hd),it.bindFramebuffer(I.FRAMEBUFFER,q)&&it.drawBuffers(D,q),it.viewport(B),it.scissor(O),it.setScissorTest(H),G){const Ct=P.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ct.__webglTexture,Y)}else if(bt){const Ct=k;for(let Ut=0;Ut<D.textures.length;Ut++){const Ot=P.get(D.textures[Ut]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ut,Ot.__webglTexture,Y,Ct)}}else if(D!==null&&Y!==0){const Ct=P.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ct.__webglTexture,Y)}N=-1},this.readRenderTargetPixels=function(D,k,Y,q,G,bt,Lt,Ct=0){if(!(D&&D.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=P.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){it.bindFramebuffer(I.FRAMEBUFFER,Ut);try{const Ot=D.textures[Ct],kt=Ot.format,zt=Ot.type;if(!Mt.textureFormatReadable(kt)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(zt)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=D.width-q&&Y>=0&&Y<=D.height-G&&(D.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ct),I.readPixels(k,Y,q,G,mt.convert(kt),mt.convert(zt),bt))}finally{const Ot=C!==null?P.get(C).__webglFramebuffer:null;it.bindFramebuffer(I.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(D,k,Y,q,G,bt,Lt,Ct=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=P.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut)if(k>=0&&k<=D.width-q&&Y>=0&&Y<=D.height-G){it.bindFramebuffer(I.FRAMEBUFFER,Ut);const Ot=D.textures[Ct],kt=Ot.format,zt=Ot.type;if(!Mt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.bufferData(I.PIXEL_PACK_BUFFER,bt.byteLength,I.STREAM_READ),D.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ct),I.readPixels(k,Y,q,G,mt.convert(kt),mt.convert(zt),0);const re=C!==null?P.get(C).__webglFramebuffer:null;it.bindFramebuffer(I.FRAMEBUFFER,re);const de=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await qd(I,de,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,bt),I.deleteBuffer(Zt),I.deleteSync(de),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,k=null,Y=0){const q=Math.pow(2,-Y),G=Math.floor(D.image.width*q),bt=Math.floor(D.image.height*q),Lt=k!==null?k.x:0,Ct=k!==null?k.y:0;z.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Lt,Ct,G,bt),it.unbindTexture()};const ud=I.createFramebuffer(),fd=I.createFramebuffer();this.copyTextureToTexture=function(D,k,Y=null,q=null,G=0,bt=null){bt===null&&(G!==0?(cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=G,G=0):bt=0);let Lt,Ct,Ut,Ot,kt,zt,Zt,re,de;const pe=D.isCompressedTexture?D.mipmaps[bt]:D.image;if(Y!==null)Lt=Y.max.x-Y.min.x,Ct=Y.max.y-Y.min.y,Ut=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,kt=Y.min.y,zt=Y.isBox3?Y.min.z:0;else{const sn=Math.pow(2,-G);Lt=Math.floor(pe.width*sn),Ct=Math.floor(pe.height*sn),D.isDataArrayTexture?Ut=pe.depth:D.isData3DTexture?Ut=Math.floor(pe.depth*sn):Ut=1,Ot=0,kt=0,zt=0}q!==null?(Zt=q.x,re=q.y,de=q.z):(Zt=0,re=0,de=0);const oe=mt.convert(k.format),Vt=mt.convert(k.type);let ee;k.isData3DTexture?(z.setTexture3D(k,0),ee=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(z.setTexture2DArray(k,0),ee=I.TEXTURE_2D_ARRAY):(z.setTexture2D(k,0),ee=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Qt=I.getParameter(I.UNPACK_ROW_LENGTH),Je=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$i=I.getParameter(I.UNPACK_SKIP_PIXELS),je=I.getParameter(I.UNPACK_SKIP_ROWS),Br=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ot),I.pixelStorei(I.UNPACK_SKIP_ROWS,kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,zt);const le=D.isDataArrayTexture||D.isData3DTexture,Ge=k.isDataArrayTexture||k.isData3DTexture;if(D.isDepthTexture){const sn=P.get(D),Fe=P.get(k),We=P.get(sn.__renderTarget),jo=P.get(Fe.__renderTarget);it.bindFramebuffer(I.READ_FRAMEBUFFER,We.__webglFramebuffer),it.bindFramebuffer(I.DRAW_FRAMEBUFFER,jo.__webglFramebuffer);for(let Si=0;Si<Ut;Si++)le&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,P.get(D).__webglTexture,G,zt+Si),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,P.get(k).__webglTexture,bt,de+Si)),I.blitFramebuffer(Ot,kt,Lt,Ct,Zt,re,Lt,Ct,I.DEPTH_BUFFER_BIT,I.NEAREST);it.bindFramebuffer(I.READ_FRAMEBUFFER,null),it.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||D.isRenderTargetTexture||P.has(D)){const sn=P.get(D),Fe=P.get(k);it.bindFramebuffer(I.READ_FRAMEBUFFER,ud),it.bindFramebuffer(I.DRAW_FRAMEBUFFER,fd);for(let We=0;We<Ut;We++)le?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,sn.__webglTexture,G,zt+We):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,sn.__webglTexture,G),Ge?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,bt,de+We):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fe.__webglTexture,bt),G!==0?I.blitFramebuffer(Ot,kt,Lt,Ct,Zt,re,Lt,Ct,I.COLOR_BUFFER_BIT,I.NEAREST):Ge?I.copyTexSubImage3D(ee,bt,Zt,re,de+We,Ot,kt,Lt,Ct):I.copyTexSubImage2D(ee,bt,Zt,re,Ot,kt,Lt,Ct);it.bindFramebuffer(I.READ_FRAMEBUFFER,null),it.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ge?D.isDataTexture||D.isData3DTexture?I.texSubImage3D(ee,bt,Zt,re,de,Lt,Ct,Ut,oe,Vt,pe.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(ee,bt,Zt,re,de,Lt,Ct,Ut,oe,pe.data):I.texSubImage3D(ee,bt,Zt,re,de,Lt,Ct,Ut,oe,Vt,pe):D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,bt,Zt,re,Lt,Ct,oe,Vt,pe.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,bt,Zt,re,pe.width,pe.height,oe,pe.data):I.texSubImage2D(I.TEXTURE_2D,bt,Zt,re,Lt,Ct,oe,Vt,pe);I.pixelStorei(I.UNPACK_ROW_LENGTH,Qt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$i),I.pixelStorei(I.UNPACK_SKIP_ROWS,je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Br),bt===0&&k.generateMipmaps&&I.generateMipmap(ee),it.unbindTexture()},this.initRenderTarget=function(D){P.get(D).__webglFramebuffer===void 0&&z.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?z.setTextureCube(D,0):D.isData3DTexture?z.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?z.setTexture2DArray(D,0):z.setTexture2D(D,0),it.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,it.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const $h={type:"change"},Tc={type:"start"},zf={type:"end"},Zs=new xs,Yh=new hn,ov=Math.cos(70*Yd.DEG2RAD),ve=new U,qe=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ia=1e-6;class av extends cg{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new ki,this._lastTargetPosition=new U,this._quat=new ki().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sh,this._sphericalDelta=new Sh,this._scale=1,this._panOffset=new U,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new U,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cv.bind(this),this._onPointerDown=lv.bind(this),this._onPointerUp=hv.bind(this),this._onContextMenu=_v.bind(this),this._onMouseWheel=dv.bind(this),this._onKeyDown=pv.bind(this),this._onTouchStart=gv.bind(this),this._onTouchMove=mv.bind(this),this._onMouseDown=uv.bind(this),this._onMouseMove=fv.bind(this),this._interceptControlDown=xv.bind(this),this._interceptControlUp=vv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($h),this.update(),this.state=se.NONE}update(t=null){const e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=qe:n>Math.PI&&(n-=qe),r<-Math.PI?r+=qe:r>Math.PI&&(r-=qe),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ve.length();o=this._clampDistance(a*this._scale);const h=a-o;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),s=!!h}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=h!==this.object.zoom;const u=new U(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Zs.origin.copy(this.object.position),Zs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zs.direction))<ov?this.object.lookAt(this.target):(Yh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zs.intersectPlane(Yh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ia||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ia||this._lastTargetPosition.distanceToSquared(this.target)>Ia?(this.dispatchEvent($h),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ve.copy(r).sub(this.target);let s=ve.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function lv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function cv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function hv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zf),this.state=se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function uv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case Tr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case Tr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Tc)}function fv(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function dv(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(Tc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zf))}function pv(i){this.enabled!==!1&&this._handleKeyDown(i)}function gv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Tc)}function mv(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function _v(i){this.enabled!==!1&&i.preventDefault()}function xv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Nn{constructor(t,e,n,r,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Nn.nextNameID=Nn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Nn.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class yv extends Nn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function nc(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!e&&"#"+e}const Sv={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:nc,toHexString:nc},ps={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Mv={isPrimitive:!1,match:Array.isArray,fromHexString(i,t,e=1){const n=ps.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(255&n)/255*e},toHexString:([i,t,e],n=1)=>ps.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},bv={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=ps.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(255&n)/255*e},toHexString:({r:i,g:t,b:e},n=1)=>ps.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},Ev=[Sv,ps,Mv,bv];class Av extends Nn{constructor(t,e,n,r){var s;super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,Ev.find(o=>o.match(s))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=nc(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ua extends Nn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Tv extends Nn{constructor(t,e,n,r,s,o){super(t,e,n,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=f=>{const p=parseFloat(this.$input.value);isNaN(p)||(this._snapClampSetValue(p+f),this.$input.value=this.getValue())};let e,n,r,s,o,a=!1;const h=f=>{if(a){const p=f.clientX-e,g=f.clientY-n;Math.abs(g)>5?(f.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(p)>5&&u()}if(!a){const p=f.clientY-r;o-=p*this._step*this._arrowKeyMultiplier(f),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}r=f.clientY},u=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",u)};this.$input.addEventListener("input",()=>{let f=parseFloat(this.$input.value);isNaN(f)||(this._stepExplicit&&(f=this._snap(f)),this.setValue(this._clamp(f)))}),this.$input.addEventListener("keydown",f=>{f.code==="Enter"&&this.$input.blur(),f.code==="ArrowUp"&&(f.preventDefault(),t(this._step*this._arrowKeyMultiplier(f))),f.code==="ArrowDown"&&(f.preventDefault(),t(this._step*this._arrowKeyMultiplier(f)*-1))}),this.$input.addEventListener("wheel",f=>{this._inputFocused&&(f.preventDefault(),t(this._step*this._normalizeMouseWheel(f)))},{passive:!1}),this.$input.addEventListener("mousedown",f=>{e=f.clientX,n=r=f.clientY,a=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",h),window.addEventListener("mouseup",u)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=g=>{const m=this.$slider.getBoundingClientRect();let M=(b=g,x=m.left,_=m.right,E=this._min,d=this._max,(b-x)/(_-x)*(d-E)+E);var b,x,_,E,d;this._snapClampSetValue(M)},e=g=>{t(g.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)};let r,s,o=!1;const a=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),o=!1},h=g=>{if(o){const m=g.touches[0].clientX-r,M=g.touches[0].clientY-s;Math.abs(m)>Math.abs(M)?a(g):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",u))}else g.preventDefault(),t(g.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this);let p;this.$slider.addEventListener("mousedown",g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",g=>{g.touches.length>1||(this._hasScrollBar?(r=g.touches[0].clientX,s=g.touches[0].clientY,o=!0):a(g),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",u))},{passive:!1}),this.$slider.addEventListener("wheel",g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const m=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+e,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class wv extends Nn{constructor(t,e,n,r){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class Cv extends Nn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Zh=!1;class wc{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:r,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{h.code!=="Enter"&&h.code!=="Space"||(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Zh&&o&&((function(h){const u=document.createElement("style");u.innerHTML=h;const f=document.querySelector("head link[rel=stylesheet], head style");f?document.head.insertBefore(u,f):document.head.appendChild(u)})('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Zh=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation())}add(t,e,n,r,s){if(Object(n)===n)return new wv(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new Tv(this,t,e,n,r,s);case"boolean":return new yv(this,t,e);case"string":return new Cv(this,t,e);case"function":return new Ua(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new Av(this,t,e,n)}addFolder(t){return new wc({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Ua||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ua)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Vf=0,Rv=1,Pv=2,Kh=2,Na=1.25,Jh=1,Le=32,ye=Le/4,kf=65535,To=Math.pow(2,-24),Cc=Symbol("SKIP_GENERATION"),Hf={strategy:Vf,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Cc]:!1};function ge(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function jh(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function Qh(i,t){t.set(i)}function tu(i,t,e){let n,r;for(let s=0;s<3;s++){const o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function Ks(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function qr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function Se(i,t){return t[i+15]===kf}function Ie(i,t){return t[i+6]}function Be(i,t){return t[i+14]}function Ae(i){return i+ye}function Te(i,t){const e=t[i+6];return i+e*ye}function Rc(i,t){return t[i+7]}function Fa(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,h=-1/0,u=-1/0,f=-1/0,p=1/0,g=1/0,m=1/0,M=-1/0,b=-1/0,x=-1/0;const _=i.offset||0;for(let E=(t-_)*6,d=(t+e-_)*6;E<d;E+=6){const l=i[E+0],y=i[E+1],c=l-y,R=l+y;c<s&&(s=c),R>h&&(h=R),l<p&&(p=l),l>M&&(M=l);const T=i[E+2],v=i[E+3],S=T-v,A=T+v;S<o&&(o=S),A>u&&(u=A),T<g&&(g=T),T>b&&(b=T);const w=i[E+4],C=i[E+5],N=w-C,F=w+C;N<a&&(a=N),F>f&&(f=F),w<m&&(m=w),w>x&&(x=w)}n[0]=s,n[1]=o,n[2]=a,n[3]=h,n[4]=u,n[5]=f,r[0]=p,r[1]=g,r[2]=m,r[3]=M,r[4]=b,r[5]=x}const Zn=32,Dv=(i,t)=>i.candidate-t.candidate,hi=new Array(Zn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Js=new Float32Array(6);function Lv(i,t,e,n,r,s){let o=-1,a=0;if(s===Vf)o=jh(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===Rv)o=jh(i),o!==-1&&(a=Iv(e,n,r,o));else if(s===Pv){const h=qr(i);let u=Na*r;const f=e.offset||0,p=(n-f)*6,g=(n+r-f)*6;for(let m=0;m<3;m++){const M=t[m],_=(t[m+3]-M)/Zn;if(r<Zn/4){const E=[...hi];E.length=r;let d=0;for(let y=p;y<g;y+=6,d++){const c=E[d];c.candidate=e[y+2*m],c.count=0;const{bounds:R,leftCacheBounds:T,rightCacheBounds:v}=c;for(let S=0;S<3;S++)v[S]=1/0,v[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0,R[S]=1/0,R[S+3]=-1/0;Ks(y,e,R)}E.sort(Dv);let l=r;for(let y=0;y<l;y++){const c=E[y];for(;y+1<l&&E[y+1].candidate===c.candidate;)E.splice(y+1,1),l--}for(let y=p;y<g;y+=6){const c=e[y+2*m];for(let R=0;R<l;R++){const T=E[R];c>=T.candidate?Ks(y,e,T.rightCacheBounds):(Ks(y,e,T.leftCacheBounds),T.count++)}}for(let y=0;y<l;y++){const c=E[y],R=c.count,T=r-c.count,v=c.leftCacheBounds,S=c.rightCacheBounds;let A=0;R!==0&&(A=qr(v)/h);let w=0;T!==0&&(w=qr(S)/h);const C=Jh+Na*(A*R+w*T);C<u&&(o=m,u=C,a=c.candidate)}}else{for(let l=0;l<Zn;l++){const y=hi[l];y.count=0,y.candidate=M+_+l*_;const c=y.bounds;for(let R=0;R<3;R++)c[R]=1/0,c[R+3]=-1/0}for(let l=p;l<g;l+=6){let R=~~((e[l+2*m]-M)/_);R>=Zn&&(R=Zn-1);const T=hi[R];T.count++,Ks(l,e,T.bounds)}const E=hi[Zn-1];Qh(E.bounds,E.rightCacheBounds);for(let l=Zn-2;l>=0;l--){const y=hi[l],c=hi[l+1];tu(y.bounds,c.rightCacheBounds,y.rightCacheBounds)}let d=0;for(let l=0;l<Zn-1;l++){const y=hi[l],c=y.count,R=y.bounds,v=hi[l+1].rightCacheBounds;c!==0&&(d===0?Qh(R,Js):tu(R,Js,Js)),d+=c;let S=0,A=0;d!==0&&(S=qr(Js)/h);const w=r-d;w!==0&&(A=qr(v)/h);const C=Jh+Na*(S*d+A*w);C<u&&(o=m,u=C,a=y.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function Iv(i,t,e,n){let r=0;const s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}class Oa{constructor(){this.boundingData=new Float32Array(6)}}function Uv(i,t,e,n,r,s){let o=n,a=n+r-1;const h=s.pos,u=s.axis*2,f=e.offset||0;for(;;){for(;o<=a&&e[(o-f)*6+u]<h;)o++;for(;o<=a&&e[(a-f)*6+u]>=h;)a--;if(o<a){for(let p=0;p<t;p++){let g=i[o*t+p];i[o*t+p]=i[a*t+p],i[a*t+p]=g}for(let p=0;p<6;p++){const g=o-f,m=a-f,M=e[g*6+p];e[g*6+p]=e[m*6+p],e[m*6+p]=M}o++,a--}else return o}}let Gf,wo,ic,Wf;const Nv=Math.pow(2,32);function rc(i){return"count"in i?1:1+rc(i.left)+rc(i.right)}function Fv(i,t,e){return Gf=new Float32Array(e),wo=new Uint32Array(e),ic=new Uint16Array(e),Wf=new Uint8Array(e),sc(i,t)}function sc(i,t){const e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)Gf[e+o]=s[o];if(r)return t.buffer?(Wf.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(wo[e+6]=t.offset,ic[n+14]=t.count,ic[n+15]=kf,i+Le);{const{left:o,right:a,splitAxis:h}=t,u=i+Le;let f=sc(u,o);const p=i/Le,m=f/Le-p;if(m>Nv)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return wo[e+6]=m,wo[e+7]=h,sc(f,a)}}function Ov(i,t,e,n,r,s){const{maxDepth:o,verbose:a,maxLeafSize:h,strategy:u,onProgress:f}=r,p=i.primitiveBuffer,g=i.primitiveBufferStride,m=new Float32Array(6);let M=!1;const b=new Oa;return Fa(t,e,n,b.boundingData,m),_(b,e,n,m),b;function x(E){f&&f((E-s.offset)/s.count)}function _(E,d,l,y=null,c=0){if(!M&&c>=o&&(M=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),l<=h||c>=o)return x(d+l),E.offset=d,E.count=l,E;const R=Lv(E.boundingData,y,t,d,l,u);if(R.axis===-1)return x(d+l),E.offset=d,E.count=l,E;const T=Uv(p,g,t,d,l,R);if(T===d||T===d+l)x(d+l),E.offset=d,E.count=l;else{E.splitAxis=R.axis;const v=new Oa,S=d,A=T-d;E.left=v,Fa(t,S,A,v.boundingData,m),_(v,S,A,m,c+1);const w=new Oa,C=T,N=l-A;E.right=w,Fa(t,C,N,w.boundingData,m),_(w,C,N,m,c+1)}return E}}function Bv(i,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),r=n[0],s=n[n.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(h=>{const u=Ov(i,a,h.offset,h.count,t,o),f=rc(u),p=new e(Le*f);return Fv(0,u,p),p})}class Pc{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class zv{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ue=new zv;let _i,Er;const hr=[],js=new Pc(()=>new ke);function Vv(i,t,e,n,r,s){_i=js.getPrimitive(),Er=js.getPrimitive(),hr.push(_i,Er),ue.setBuffer(i._roots[t]);const o=oc(0,i.geometry,e,n,r,s);ue.clearBuffer(),js.releasePrimitive(_i),js.releasePrimitive(Er),hr.pop(),hr.pop();const a=hr.length;return a>0&&(Er=hr[a-1],_i=hr[a-2]),o}function oc(i,t,e,n,r=null,s=0,o=0){const{float32Array:a,uint16Array:h,uint32Array:u}=ue;let f=i*2;if(Se(f,h)){const M=Ie(i,u),b=Be(f,h);return ge(i,a,_i),n(M,b,!1,o,s+i/ye,_i)}else{let w=function(N){const{uint16Array:F,uint32Array:B}=ue;let O=N*2;for(;!Se(O,F);)N=Ae(N),O=N*2;return Ie(N,B)},C=function(N){const{uint16Array:F,uint32Array:B}=ue;let O=N*2;for(;!Se(O,F);)N=Te(N,B),O=N*2;return Ie(N,B)+Be(O,F)};var g=w,m=C;const M=Ae(i),b=Te(i,u);let x=M,_=b,E,d,l,y;if(r&&(l=_i,y=Er,ge(x,a,l),ge(_,a,y),E=r(l),d=r(y),d<E)){x=b,_=M;const N=E;E=d,d=N,l=y}l||(l=_i,ge(x,a,l));const c=Se(x*2,h),R=e(l,c,E,o+1,s+x/ye);let T;if(R===Kh){const N=w(x),B=C(x)-N;T=n(N,B,!0,o+1,s+x/ye,l)}else T=R&&oc(x,t,e,n,r,s,o+1);if(T)return!0;y=Er,ge(_,a,y);const v=Se(_*2,h),S=e(y,v,d,o+1,s+_/ye);let A;if(S===Kh){const N=w(_),B=C(_)-N;A=n(N,B,!0,o+1,s+_/ye,y)}else A=S&&oc(_,t,e,n,r,s,o+1);return!!A}}const ss=new ue.constructor,Uo=new ue.constructor,fi=new Pc(()=>new ke),ur=new ke,fr=new ke,Ba=new ke,za=new ke;let Va=!1;function kv(i,t,e,n){if(Va)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Va=!0;const r=i._roots,s=t._roots;let o,a=0,h=0;const u=new Kt().copy(e).invert();for(let f=0,p=r.length;f<p;f++){ss.setBuffer(r[f]),h=0;const g=fi.getPrimitive();ge(0,ss.float32Array,g),g.applyMatrix4(u);for(let m=0,M=s.length;m<M&&(Uo.setBuffer(s[m]),o=vn(0,0,e,u,n,a,h,0,0,g),Uo.clearBuffer(),h+=s[m].byteLength/Le,!o);m++);if(fi.releasePrimitive(g),ss.clearBuffer(),a+=r[f].byteLength/Le,o)break}return Va=!1,o}function vn(i,t,e,n,r,s=0,o=0,a=0,h=0,u=null,f=!1){let p,g;f?(p=Uo,g=ss):(p=ss,g=Uo);const m=p.float32Array,M=p.uint32Array,b=p.uint16Array,x=g.float32Array,_=g.uint32Array,E=g.uint16Array,d=i*2,l=t*2,y=Se(d,b),c=Se(l,E);let R=!1;if(c&&y)f?R=r(Ie(t,_),Be(t*2,E),Ie(i,M),Be(i*2,b),h,o+t/ye,a,s+i/ye):R=r(Ie(i,M),Be(i*2,b),Ie(t,_),Be(t*2,E),a,s+i/ye,h,o+t/ye);else if(c){const T=fi.getPrimitive();ge(t,x,T),T.applyMatrix4(e);const v=Ae(i),S=Te(i,M);ge(v,m,ur),ge(S,m,fr);const A=T.intersectsBox(ur),w=T.intersectsBox(fr);R=A&&vn(t,v,n,e,r,o,s,h,a+1,T,!f)||w&&vn(t,S,n,e,r,o,s,h,a+1,T,!f),fi.releasePrimitive(T)}else{const T=Ae(t),v=Te(t,_);ge(T,x,Ba),ge(v,x,za);const S=u.intersectsBox(Ba),A=u.intersectsBox(za);if(S&&A)R=vn(i,T,e,n,r,s,o,a,h+1,u,f)||vn(i,v,e,n,r,s,o,a,h+1,u,f);else if(S)if(y)R=vn(i,T,e,n,r,s,o,a,h+1,u,f);else{const w=fi.getPrimitive();w.copy(Ba).applyMatrix4(e);const C=Ae(i),N=Te(i,M);ge(C,m,ur),ge(N,m,fr);const F=w.intersectsBox(ur),B=w.intersectsBox(fr);R=F&&vn(T,C,n,e,r,o,s,h,a+1,w,!f)||B&&vn(T,N,n,e,r,o,s,h,a+1,w,!f),fi.releasePrimitive(w)}else if(A)if(y)R=vn(i,v,e,n,r,s,o,a,h+1,u,f);else{const w=fi.getPrimitive();w.copy(za).applyMatrix4(e);const C=Ae(i),N=Te(i,M);ge(C,m,ur),ge(N,m,fr);const F=w.intersectsBox(ur),B=w.intersectsBox(fr);R=F&&vn(v,C,n,e,r,o,s,h,a+1,w,!f)||B&&vn(v,N,n,e,r,o,s,h,a+1,w,!f),fi.releasePrimitive(w)}}return R}const eu=new ke,dr=new Float32Array(6);class Hv{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Hf,...t},Bv(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,h=-1/0,u=-1/0,f=-1/0;for(let p=t,g=t+e;p<g;p++){this.writePrimitiveBounds(p,dr,0);const[m,M,b,x,_,E]=dr;m<s&&(s=m),x>h&&(h=x),M<o&&(o=M),_>u&&(u=_),b<a&&(a=b),E>f&&(f=E)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=h,n[r+4]=u,n[r+5]=f,n}computePrimitiveBounds(t,e,n){const r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,dr,0);const[a,h,u,f,p,g]=dr,m=(a+f)/2,M=(h+p)/2,b=(u+g)/2,x=(f-a)/2,_=(p-h)/2,E=(g-u)/2,d=(s-r)*6;n[d+0]=m,n[d+1]=x+(Math.abs(m)+x)*To,n[d+2]=M,n[d+3]=_+(Math.abs(M)+_)*To,n[d+4]=b,n[d+5]=E+(Math.abs(b)+E)*To}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{const n=this._roots;for(let r=0;r<n.length;r++){const s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),h=s.byteLength/Le;for(let u=0;u<h;u++){const f=ye*u,p=2*f;Se(p,a)&&(o[f+6]+=t)}}}}traverse(t,e=0){const n=this._roots[e],r=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,h=0){const u=a*2,f=Se(u,s);if(f){const p=r[a+6],g=s[u+14];t(h,f,new Float32Array(n,a*4,6),p,g)}else{const p=Ae(a),g=Te(a,r),m=Rc(a,r);t(h,f,new Float32Array(n,a*4,6),m)||(o(p,h+1),o(g,h+1))}}}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),h=r.byteLength/Le;for(let u=h-1;u>=0;u--){const f=u*ye,p=f*2;if(Se(p,o)){const m=Ie(f,s),M=Be(p,o);this.writePrimitiveRangeBounds(m,M,dr,0),a.set(dr,f)}else{const m=Ae(f),M=Te(f,s);for(let b=0;b<3;b++){const x=a[m+b],_=a[m+b+3],E=a[M+b],d=a[M+b+3];a[f+b]=x<E?x:E,a[f+b+3]=_>d?_:d}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{ge(0,new Float32Array(n),eu),t.union(eu)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){const p=r;r=(g,m,M,b,x)=>p(g,m,M,b,x)?!0:a(g,m,this,s,M,b,o)}else r||(s?r=(p,g,m,M)=>a(p,g,this,s,m,M,o):r=(p,g,m)=>m);let h=!1,u=0;const f=this._roots;for(let p=0,g=f.length;p<g;p++){const m=f[p];if(h=Vv(this,p,n,r,e,u),h)break;u+=m.byteLength/Le}return h}bvhcast(t,e,n){let{intersectsRanges:r}=n;return kv(this,t,e,r)}}function Gv(){return typeof SharedArrayBuffer<"u"}function Dc(i){return i.index?i.index.count:i.attributes.position.count}function Xo(i){return Dc(i)/3}function Wv(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Xv(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Wv(e,n);i.setIndex(new Ze(r,1));for(let s=0;s<e;s++)r[s]=s}}function qv(i,t,e){const n=Dc(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),h=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(h)}}function $v(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function nu(i,t,e){const n=qv(i,t,e),r=$v(i,e);if(!r.length)return[n];const s=[],o=n.offset,a=n.offset+n.count,h=Dc(i)/e,u=[];for(const g of r){const{offset:m,count:M}=g,b=m,x=isFinite(M)?M:h-m,_=m+x;b<a&&_>o&&(u.push({pos:Math.max(o,b),isStart:!0}),u.push({pos:Math.min(a,_),isStart:!1}))}u.sort((g,m)=>g.pos!==m.pos?g.pos-m.pos:g.type==="end"?-1:1);let f=0,p=null;for(const g of u){const m=g.pos;f!==0&&m!==p&&s.push({offset:p,count:m-p}),f+=g.isStart?1:-1,p=m}return s}function Yv(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((u,f)=>u+f.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o);let h=0;for(let u=0;u<i.length;u++){const{offset:f,count:p}=i[u];for(let g=0;g<p;g++)a[h+g]=f+g;h+=p}return a}class Zv extends Hv{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!Gv())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Hf,...e},e[Cc]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const r=nu(e,t.range,n),s=Yv(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else Xv(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ke))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:nu(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class ii{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const h=t[s][e];n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const a=e[s],h=t.dot(a);n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}ii.prototype.setFromBox=(function(){const i=new U;return function(e,n){const r=n.min,s=n.max;let o=1/0,a=-1/0;for(let h=0;h<=1;h++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){i.x=r.x*h+s.x*(1-h),i.y=r.y*u+s.y*(1-u),i.z=r.z*f+s.z*(1-f);const p=e.dot(i);o=Math.min(p,o),a=Math.max(p,a)}this.min=o,this.max=a}})();const Kv=(function(){const i=new U,t=new U,e=new U;return function(r,s,o){const a=r.start,h=i,u=s.start,f=t;e.subVectors(a,u),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const p=e.dot(f),g=f.dot(h),m=f.dot(f),M=e.dot(h),x=h.dot(h)*m-g*g;let _,E;x!==0?_=(p*g-M*m)/x:_=0,E=(p+_*g)/m,o.x=_,o.y=E}})(),Lc=(function(){const i=new pt,t=new U,e=new U;return function(r,s,o,a){Kv(r,s,i);let h=i.x,u=i.y;if(h>=0&&h<=1&&u>=0&&u<=1){r.at(h,o),s.at(u,a);return}else if(h>=0&&h<=1){u<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(u>=0&&u<=1){h<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let f;h<0?f=r.start:f=r.end;let p;u<0?p=s.start:p=s.end;const g=t,m=e;if(r.closestPointToPoint(p,!0,t),s.closestPointToPoint(f,!0,e),g.distanceToSquared(p)<=m.distanceToSquared(f)){o.copy(g),a.copy(p);return}else{o.copy(f),a.copy(m);return}}}})(),Jv=(function(){const i=new U,t=new U,e=new hn,n=new we;return function(s,o){const{radius:a,center:h}=s,{a:u,b:f,c:p}=o;if(n.start=u,n.end=f,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a||(n.start=u,n.end=p,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a)||(n.start=f,n.end=p,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a))return!0;const b=o.getPlane(e);if(Math.abs(b.distanceToPoint(h))<=a){const _=b.projectPoint(h,t);if(o.containsPoint(_))return!0}return!1}})(),jv=["x","y","z"],Kn=1e-15,iu=Kn*Kn;function an(i){return Math.abs(i)<Kn}class Ke extends he{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new U),this.satBounds=new Array(4).fill().map(()=>new ii),this.points=[this.a,this.b,this.c],this.plane=new hn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new we,this.needsUpdate=!0}intersectsSphere(t){return Jv(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],h=o[0];this.getNormal(a),h.setFromPoints(a,r);const u=s[1],f=o[1];u.subVectors(t,e),f.setFromPoints(u,r);const p=s[2],g=o[2];p.subVectors(e,n),g.setFromPoints(p,r);const m=s[3],M=o[3];m.subVectors(n,t),M.setFromPoints(m,r);const b=u.length(),x=p.length(),_=m.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,b<Kn?x<Kn||_<Kn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):x<Kn?_<Kn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):_<Kn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Ke.prototype.closestPointToSegment=(function(){const i=new U,t=new U,e=new we;return function(r,s=null,o=null){const{start:a,end:h}=r,u=this.points;let f,p=1/0;for(let g=0;g<3;g++){const m=(g+1)%3;e.start.copy(u[g]),e.end.copy(u[m]),Lc(e,r,i,t),f=i.distanceToSquared(t),f<p&&(p=f,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),f=a.distanceToSquared(i),f<p&&(p=f,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(h,i),f=h.distanceToSquared(i),f<p&&(p=f,s&&s.copy(i),o&&o.copy(h)),Math.sqrt(p)}})();Ke.prototype.intersectsTriangle=(function(){const i=new Ke,t=new ii,e=new ii,n=new U,r=new U,s=new U,o=new U,a=new we,h=new we,u=new U,f=new pt,p=new pt;function g(d,l,y,c){const R=n;!d.isDegenerateIntoPoint&&!d.isDegenerateIntoSegment?R.copy(d.plane.normal):R.copy(l.plane.normal);const T=d.satBounds,v=d.satAxes;for(let w=1;w<4;w++){const C=T[w],N=v[w];if(t.setFromPoints(N,l.points),C.isSeparated(t)||(o.copy(R).cross(N),t.setFromPoints(o,d.points),e.setFromPoints(o,l.points),t.isSeparated(e)))return!1}const S=l.satBounds,A=l.satAxes;for(let w=1;w<4;w++){const C=S[w],N=A[w];if(t.setFromPoints(N,d.points),C.isSeparated(t)||(o.crossVectors(R,N),t.setFromPoints(o,d.points),e.setFromPoints(o,l.points),t.isSeparated(e)))return!1}return y&&(c||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),y.start.set(0,0,0),y.end.set(0,0,0)),!0}function m(d,l,y,c,R,T,v,S,A,w,C){let N=v/(v-S);w.x=c+(R-c)*N,C.start.subVectors(l,d).multiplyScalar(N).add(d),N=v/(v-A),w.y=c+(T-c)*N,C.end.subVectors(y,d).multiplyScalar(N).add(d)}function M(d,l,y,c,R,T,v,S,A,w,C){if(R>0)m(d.c,d.a,d.b,c,l,y,A,v,S,w,C);else if(T>0)m(d.b,d.a,d.c,y,l,c,S,v,A,w,C);else if(S*A>0||v!=0)m(d.a,d.b,d.c,l,y,c,v,S,A,w,C);else if(S!=0)m(d.b,d.a,d.c,y,l,c,S,v,A,w,C);else if(A!=0)m(d.c,d.a,d.b,c,l,y,A,v,S,w,C);else return!0;return!1}function b(d,l,y,c){const R=l.degenerateSegment,T=d.plane.distanceToPoint(R.start),v=d.plane.distanceToPoint(R.end);return an(T)?an(v)?g(d,l,y,c):(y&&(y.start.copy(R.start),y.end.copy(R.start)),d.containsPoint(R.start)):an(v)?(y&&(y.start.copy(R.end),y.end.copy(R.end)),d.containsPoint(R.end)):d.plane.intersectLine(R,n)!=null?(y&&(y.start.copy(n),y.end.copy(n)),d.containsPoint(n)):!1}function x(d,l,y){const c=l.a;return an(d.plane.distanceToPoint(c))&&d.containsPoint(c)?(y&&(y.start.copy(c),y.end.copy(c)),!0):!1}function _(d,l,y){const c=d.degenerateSegment,R=l.a;return c.closestPointToPoint(R,!0,n),R.distanceToSquared(n)<iu?(y&&(y.start.copy(R),y.end.copy(R)),!0):!1}function E(d,l,y,c){if(d.isDegenerateIntoSegment)if(l.isDegenerateIntoSegment){const R=d.degenerateSegment,T=l.degenerateSegment,v=r,S=s;R.delta(v),T.delta(S);const A=n.subVectors(T.start,R.start),w=v.x*S.y-v.y*S.x;if(an(w))return!1;const C=(A.x*S.y-A.y*S.x)/w,N=-(v.x*A.y-v.y*A.x)/w;if(C<0||C>1||N<0||N>1)return!1;const F=R.start.z+v.z*C,B=T.start.z+S.z*N;return an(F-B)?(y&&(y.start.copy(R.start).addScaledVector(v,C),y.end.copy(R.start).addScaledVector(v,C)),!0):!1}else return l.isDegenerateIntoPoint?_(d,l,y):b(l,d,y,c);else{if(d.isDegenerateIntoPoint)return l.isDegenerateIntoPoint?l.a.distanceToSquared(d.a)<iu?(y&&(y.start.copy(d.a),y.end.copy(d.a)),!0):!1:l.isDegenerateIntoSegment?_(l,d,y):x(l,d,y);if(l.isDegenerateIntoPoint)return x(d,l,y);if(l.isDegenerateIntoSegment)return b(d,l,y,c)}}return function(l,y=null,c=!1){this.needsUpdate&&this.update(),l.isExtendedTriangle?l.needsUpdate&&l.update():(i.copy(l),i.update(),l=i);const R=E(this,l,y,c);if(R!==void 0)return R;const T=this.plane,v=l.plane;let S=v.distanceToPoint(this.a),A=v.distanceToPoint(this.b),w=v.distanceToPoint(this.c);an(S)&&(S=0),an(A)&&(A=0),an(w)&&(w=0);const C=S*A,N=S*w;if(C>0&&N>0)return!1;let F=T.distanceToPoint(l.a),B=T.distanceToPoint(l.b),O=T.distanceToPoint(l.c);an(F)&&(F=0),an(B)&&(B=0),an(O)&&(O=0);const H=F*B,K=F*O;if(H>0&&K>0)return!1;r.copy(T.normal),s.copy(v.normal);const nt=r.cross(s);let tt=0,ft=Math.abs(nt.x);const dt=Math.abs(nt.y);dt>ft&&(ft=dt,tt=1),Math.abs(nt.z)>ft&&(tt=2);const Tt=jv[tt],$=this.a[Tt],J=this.b[Tt],ot=this.c[Tt],ht=l.a[Tt],at=l.b[Tt],Pt=l.c[Tt];if(M(this,$,J,ot,C,N,S,A,w,f,a))return g(this,l,y,c);if(M(l,ht,at,Pt,H,K,F,B,O,p,h))return g(this,l,y,c);if(f.y<f.x){const Gt=f.y;f.y=f.x,f.x=Gt,u.copy(a.start),a.start.copy(a.end),a.end.copy(u)}if(p.y<p.x){const Gt=p.y;p.y=p.x,p.x=Gt,u.copy(h.start),h.start.copy(h.end),h.end.copy(u)}return f.y<p.x||p.y<f.x?!1:(y&&(p.x>f.x?y.start.copy(h.start):y.start.copy(a.start),p.y<f.y?y.end.copy(h.end):y.end.copy(a.end)),!0)}})();Ke.prototype.distanceToPoint=(function(){const i=new U;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ke.prototype.distanceToTriangle=(function(){const i=new U,t=new U,e=["a","b","c"],n=new we,r=new we;return function(o,a=null,h=null){const u=a||h?n:null;if(this.intersectsTriangle(o,u))return(a||h)&&(a&&u.getCenter(a),h&&u.getCenter(h)),0;let f=1/0;for(let p=0;p<3;p++){let g;const m=e[p],M=o[m];this.closestPointToPoint(M,i),g=M.distanceToSquared(i),g<f&&(f=g,a&&a.copy(i),h&&h.copy(M));const b=this[m];o.closestPointToPoint(b,i),g=b.distanceToSquared(i),g<f&&(f=g,a&&a.copy(b),h&&h.copy(i))}for(let p=0;p<3;p++){const g=e[p],m=e[(p+1)%3];n.set(this[g],this[m]);for(let M=0;M<3;M++){const b=e[M],x=e[(M+1)%3];r.set(o[b],o[x]),Lc(n,r,i,t);const _=i.distanceToSquared(t);_<f&&(f=_,a&&a.copy(i),h&&h.copy(t))}}return Math.sqrt(f)}})();class He{constructor(t,e,n){this.isOrientedBox=!0,this.min=new U,this.max=new U,this.matrix=new Kt,this.invMatrix=new Kt,this.points=new Array(8).fill().map(()=>new U),this.satAxes=new Array(3).fill().map(()=>new U),this.satBounds=new Array(3).fill().map(()=>new ii),this.alignedSatBounds=new Array(3).fill().map(()=>new ii),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}He.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let u=0;u<=1;u++)for(let f=0;f<=1;f++)for(let p=0;p<=1;p++){const g=1*u|2*f|4*p,m=r[g];m.x=u?n.x:e.x,m.y=f?n.y:e.y,m.z=p?n.z:e.z,m.applyMatrix4(t)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let u=0;u<3;u++){const f=o[u],p=s[u],g=1<<u,m=r[g];f.subVectors(a,m),p.setFromPoints(f,r)}const h=this.alignedSatBounds;h[0].setFromPointsField(r,"x"),h[1].setFromPointsField(r,"y"),h[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();He.prototype.intersectsBox=(function(){const i=new ii;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let h=0;h<3;h++){const u=o[h],f=s[h];if(i.setFromBox(u,e),f.isSeparated(i))return!1}return!0}})();He.prototype.intersectsTriangle=(function(){const i=new Ke,t=new Array(3),e=new ii,n=new ii,r=new U;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,h=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let g=0;g<3;g++){const m=a[g],M=h[g];if(e.setFromPoints(M,t),m.isSeparated(e))return!1}const u=o.satBounds,f=o.satAxes,p=this.points;for(let g=0;g<3;g++){const m=u[g],M=f[g];if(e.setFromPoints(M,p),m.isSeparated(e))return!1}for(let g=0;g<3;g++){const m=h[g];for(let M=0;M<4;M++){const b=f[M];if(r.crossVectors(m,b),e.setFromPoints(r,t),n.setFromPoints(r,p),e.isSeparated(n))return!1}}return!0}})();He.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();He.prototype.distanceToPoint=(function(){const i=new U;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();He.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new we),e=new Array(12).fill().map(()=>new we),n=new U,r=new U;return function(o,a=0,h=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(h||u)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),h&&h.copy(n),u&&u.copy(r)),0;const f=a*a,p=o.min,g=o.max,m=this.points;let M=1/0;for(let x=0;x<8;x++){const _=m[x];r.copy(_).clamp(p,g);const E=_.distanceToSquared(r);if(E<M&&(M=E,h&&h.copy(_),u&&u.copy(r),E<f))return Math.sqrt(E)}let b=0;for(let x=0;x<3;x++)for(let _=0;_<=1;_++)for(let E=0;E<=1;E++){const d=(x+1)%3,l=(x+2)%3,y=_<<d|E<<l,c=1<<x|_<<d|E<<l,R=m[y],T=m[c];t[b].set(R,T);const S=i[x],A=i[d],w=i[l],C=e[b],N=C.start,F=C.end;N[S]=p[S],N[A]=_?p[A]:g[A],N[w]=E?p[w]:g[A],F[S]=g[S],F[A]=_?p[A]:g[A],F[w]=E?p[w]:g[A],b++}for(let x=0;x<=1;x++)for(let _=0;_<=1;_++)for(let E=0;E<=1;E++){r.x=x?g.x:p.x,r.y=_?g.y:p.y,r.z=E?g.z:p.z,this.closestPointToPoint(r,n);const d=r.distanceToSquared(n);if(d<M&&(M=d,h&&h.copy(n),u&&u.copy(r),d<f))return Math.sqrt(d)}for(let x=0;x<12;x++){const _=t[x];for(let E=0;E<12;E++){const d=e[E];Lc(_,d,n,r);const l=n.distanceToSquared(r);if(l<M&&(M=l,h&&h.copy(n),u&&u.copy(r),l<f))return Math.sqrt(l)}}return Math.sqrt(M)}})();class Qv extends Pc{constructor(){super(()=>new Ke)}}const fn=new Qv,$r=new U,ka=new U;function ty(i,t,e={},n=0,r=1/0){const s=n*n,o=r*r;let a=1/0,h=null;if(i.shapecast({boundsTraverseOrder:f=>($r.copy(t).clamp(f.min,f.max),$r.distanceToSquared(t)),intersectsBounds:(f,p,g)=>g<a&&g<o,intersectsTriangle:(f,p)=>{f.closestPointToPoint(t,$r);const g=t.distanceToSquared($r);return g<a&&(ka.copy($r),a=g,h=p),g<s}}),a===1/0)return null;const u=Math.sqrt(a);return e.point?e.point.copy(ka):e.point=ka.clone(),e.distance=u,e.faceIndex=h,e}const Qs=parseInt(_s)>=169,ey=parseInt(_s)<=161,Ci=new U,Ri=new U,Pi=new U,to=new pt,eo=new pt,no=new pt,ru=new U,su=new U,ou=new U,Yr=new U;function ny(i,t,e,n,r,s,o,a){let h;if(s===ze?h=i.intersectTriangle(n,e,t,!0,r):h=i.intersectTriangle(t,e,n,s!==yn,r),h===null)return null;const u=i.origin.distanceTo(r);return u<o||u>a?null:{distance:u,point:r.clone()}}function au(i,t,e,n,r,s,o,a,h,u,f){Ci.fromBufferAttribute(t,s),Ri.fromBufferAttribute(t,o),Pi.fromBufferAttribute(t,a);const p=ny(i,Ci,Ri,Pi,Yr,h,u,f);if(p){if(n){to.fromBufferAttribute(n,s),eo.fromBufferAttribute(n,o),no.fromBufferAttribute(n,a),p.uv=new pt;const m=he.getInterpolation(Yr,Ci,Ri,Pi,to,eo,no,p.uv);Qs||(p.uv=m)}if(r){to.fromBufferAttribute(r,s),eo.fromBufferAttribute(r,o),no.fromBufferAttribute(r,a),p.uv1=new pt;const m=he.getInterpolation(Yr,Ci,Ri,Pi,to,eo,no,p.uv1);Qs||(p.uv1=m),ey&&(p.uv2=p.uv1)}if(e){ru.fromBufferAttribute(e,s),su.fromBufferAttribute(e,o),ou.fromBufferAttribute(e,a),p.normal=new U;const m=he.getInterpolation(Yr,Ci,Ri,Pi,ru,su,ou,p.normal);p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1),Qs||(p.normal=m)}const g={a:s,b:o,c:a,normal:new U,materialIndex:0};if(he.getNormal(Ci,Ri,Pi,g.normal),p.face=g,p.faceIndex=s,Qs){const m=new U;he.getBarycoord(Yr,Ci,Ri,Pi,m),p.barycoord=m}}return p}function lu(i){return i&&i.isMaterial?i.side:i}function qo(i,t,e,n,r,s,o){const a=n*3;let h=a+0,u=a+1,f=a+2;const{index:p,groups:g}=i;i.index&&(h=p.getX(h),u=p.getX(u),f=p.getX(f));const{position:m,normal:M,uv:b,uv1:x}=i.attributes;if(Array.isArray(t)){const _=n*3;for(let E=0,d=g.length;E<d;E++){const{start:l,count:y,materialIndex:c}=g[E];if(_>=l&&_<l+y){const R=lu(t[c]),T=au(e,m,M,b,x,h,u,f,R,s,o);if(T)if(T.faceIndex=n,T.face.materialIndex=c,r)r.push(T);else return T}}}else{const _=lu(t),E=au(e,m,M,b,x,h,u,f,_,s,o);if(E)if(E.faceIndex=n,E.face.materialIndex=0,r)r.push(E);else return E}return null}function xe(i,t,e,n){const r=i.a,s=i.b,o=i.c;let a=t,h=t+1,u=t+2;e&&(a=e.getX(a),h=e.getX(h),u=e.getX(u)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(h),s.y=n.getY(h),s.z=n.getZ(h),o.x=n.getX(u),o.y=n.getY(u),o.z=n.getZ(u)}function iy(i,t,e,n,r,s,o,a){const{geometry:h,_indirectBuffer:u}=i;for(let f=n,p=n+r;f<p;f++)qo(h,t,e,f,s,o,a)}function ry(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:h}=i;let u=1/0,f=null;for(let p=n,g=n+r;p<g;p++){let m;m=qo(a,t,e,p,null,s,o),m&&m.distance<u&&(f=m,u=m.distance)}return f}function sy(i,t,e,n,r,s,o){const{geometry:a}=e,{index:h}=a,u=a.attributes.position;for(let f=i,p=t+i;f<p;f++){let g;if(g=f,xe(o,g*3,h,u),o.needsUpdate=!0,n(o,g,r,s))return!0}return!1}function oy(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,h,u=0;const f=i._roots;for(let g=0,m=f.length;g<m;g++)s=f[g],o=new Uint32Array(s),a=new Uint16Array(s),h=new Float32Array(s),p(0,u),u+=s.byteLength;function p(g,m,M=!1){const b=g*2;if(Se(b,a)){const x=Ie(g,o),_=Be(b,a);let E=1/0,d=1/0,l=1/0,y=-1/0,c=-1/0,R=-1/0;for(let T=3*x,v=3*(x+_);T<v;T++){let S=n[T];const A=r.getX(S),w=r.getY(S),C=r.getZ(S);A<E&&(E=A),A>y&&(y=A),w<d&&(d=w),w>c&&(c=w),C<l&&(l=C),C>R&&(R=C)}return h[g+0]!==E||h[g+1]!==d||h[g+2]!==l||h[g+3]!==y||h[g+4]!==c||h[g+5]!==R?(h[g+0]=E,h[g+1]=d,h[g+2]=l,h[g+3]=y,h[g+4]=c,h[g+5]=R,!0):!1}else{const x=Ae(g),_=Te(g,o);let E=M,d=!1,l=!1;if(t){if(!E){const S=x/ye+m/Le,A=_/ye+m/Le;d=t.has(S),l=t.has(A),E=!d&&!l}}else d=!0,l=!0;const y=E||d,c=E||l;let R=!1;y&&(R=p(x,m,E));let T=!1;c&&(T=p(_,m,E));const v=R||T;if(v)for(let S=0;S<3;S++){const A=x+S,w=_+S,C=h[A],N=h[A+3],F=h[w],B=h[w+3];h[g+S]=C<F?C:F,h[g+S+3]=N>B?N:B}return v}}}function vi(i,t,e,n,r){let s,o,a,h,u,f;const p=1/e.direction.x,g=1/e.direction.y,m=1/e.direction.z,M=e.origin.x,b=e.origin.y,x=e.origin.z;let _=t[i],E=t[i+3],d=t[i+1],l=t[i+3+1],y=t[i+2],c=t[i+3+2];return p>=0?(s=(_-M)*p,o=(E-M)*p):(s=(E-M)*p,o=(_-M)*p),g>=0?(a=(d-b)*g,h=(l-b)*g):(a=(l-b)*g,h=(d-b)*g),s>h||a>o||((a>s||isNaN(s))&&(s=a),(h<o||isNaN(o))&&(o=h),m>=0?(u=(y-x)*m,f=(c-x)*m):(u=(c-x)*m,f=(y-x)*m),s>f||u>o)?!1:((u>s||s!==s)&&(s=u),(f<o||o!==o)&&(o=f),s<=r&&o>=n)}function ay(i,t,e,n,r,s,o,a){const{geometry:h,_indirectBuffer:u}=i;for(let f=n,p=n+r;f<p;f++){let g=u?u[f]:f;qo(h,t,e,g,s,o,a)}}function ly(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:h}=i;let u=1/0,f=null;for(let p=n,g=n+r;p<g;p++){let m;m=qo(a,t,e,h?h[p]:p,null,s,o),m&&m.distance<u&&(f=m,u=m.distance)}return f}function cy(i,t,e,n,r,s,o){const{geometry:a}=e,{index:h}=a,u=a.attributes.position;for(let f=i,p=t+i;f<p;f++){let g;if(g=e.resolveTriangleIndex(f),xe(o,g*3,h,u),o.needsUpdate=!0,n(o,g,r,s))return!0}return!1}function hy(i,t,e,n,r,s,o){ue.setBuffer(i._roots[t]),ac(0,i,e,n,r,s,o),ue.clearBuffer()}function ac(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:h,uint32Array:u}=ue,f=i*2;if(Se(f,h)){const g=Ie(i,u),m=Be(f,h);iy(t,e,n,g,m,r,s,o)}else{const g=Ae(i);vi(g,a,n,s,o)&&ac(g,t,e,n,r,s,o);const m=Te(i,u);vi(m,a,n,s,o)&&ac(m,t,e,n,r,s,o)}}const uy=["x","y","z"];function fy(i,t,e,n,r,s){ue.setBuffer(i._roots[t]);const o=lc(0,i,e,n,r,s);return ue.clearBuffer(),o}function lc(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:h}=ue;let u=i*2;if(Se(u,a)){const p=Ie(i,h),g=Be(u,a);return ry(t,e,n,p,g,r,s)}else{const p=Rc(i,h),g=uy[p],M=n.direction[g]>=0;let b,x;M?(b=Ae(i),x=Te(i,h)):(b=Te(i,h),x=Ae(i));const E=vi(b,o,n,r,s)?lc(b,t,e,n,r,s):null;if(E){const y=E.point[g];if(M?y<=o[x+p]:y>=o[x+p+3])return E}const l=vi(x,o,n,r,s)?lc(x,t,e,n,r,s):null;return E&&l?E.distance<=l.distance?E:l:E||l||null}}const io=new ke,pr=new Ke,gr=new Ke,Zr=new Kt,cu=new He,ro=new He;function dy(i,t,e,n){ue.setBuffer(i._roots[t]);const r=cc(0,i,e,n);return ue.clearBuffer(),r}function cc(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ue;let h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),cu.set(e.boundingBox.min,e.boundingBox.max,n),r=cu),Se(h,o)){const f=t.geometry,p=f.index,g=f.attributes.position,m=e.index,M=e.attributes.position,b=Ie(i,a),x=Be(h,o);if(Zr.copy(n).invert(),e.boundsTree)return ge(i,s,ro),ro.matrix.copy(Zr),ro.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>ro.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let d=b*3,l=(x+b)*3;d<l;d+=3)if(xe(gr,d,p,g),gr.needsUpdate=!0,E.intersectsTriangle(gr))return!0;return!1}});{const _=Xo(e);for(let E=b*3,d=(x+b)*3;E<d;E+=3){xe(pr,E,p,g),pr.a.applyMatrix4(Zr),pr.b.applyMatrix4(Zr),pr.c.applyMatrix4(Zr),pr.needsUpdate=!0;for(let l=0,y=_*3;l<y;l+=3)if(xe(gr,l,m,M),gr.needsUpdate=!0,pr.intersectsTriangle(gr))return!0}}}else{const f=Ae(i),p=Te(i,a);return ge(f,s,io),!!(r.intersectsBox(io)&&cc(f,t,e,n,r)||(ge(p,s,io),r.intersectsBox(io)&&cc(p,t,e,n,r)))}}const so=new Kt,Ha=new He,Kr=new He,py=new U,gy=new U,my=new U,_y=new U;function xy(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ha.set(t.boundingBox.min,t.boundingBox.max,e),Ha.needsUpdate=!0;const a=i.geometry,h=a.attributes.position,u=a.index,f=t.attributes.position,p=t.index,g=fn.getPrimitive(),m=fn.getPrimitive();let M=py,b=gy,x=null,_=null;r&&(x=my,_=_y);let E=1/0,d=null,l=null;return so.copy(e).invert(),Kr.matrix.copy(so),i.shapecast({boundsTraverseOrder:y=>Ha.distanceToBox(y),intersectsBounds:(y,c,R)=>R<E&&R<o?(c&&(Kr.min.copy(y.min),Kr.max.copy(y.max),Kr.needsUpdate=!0),!0):!1,intersectsRange:(y,c)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:T=>Kr.distanceToBox(T),intersectsBounds:(T,v,S)=>S<E&&S<o,intersectsRange:(T,v)=>{for(let S=T,A=T+v;S<A;S++){xe(m,3*S,p,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let w=y,C=y+c;w<C;w++){xe(g,3*w,u,h),g.needsUpdate=!0;const N=g.distanceToTriangle(m,M,x);if(N<E&&(b.copy(M),_&&_.copy(x),E=N,d=w,l=S),N<s)return!0}}}});{const R=Xo(t);for(let T=0,v=R;T<v;T++){xe(m,3*T,p,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let S=y,A=y+c;S<A;S++){xe(g,3*S,u,h),g.needsUpdate=!0;const w=g.distanceToTriangle(m,M,x);if(w<E&&(b.copy(M),_&&_.copy(x),E=w,d=S,l=T),w<s)return!0}}}}}),fn.releasePrimitive(g),fn.releasePrimitive(m),E===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=E,n.faceIndex=d,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(so),b.applyMatrix4(so),r.distance=b.sub(r.point).length(),r.faceIndex=l),n)}function vy(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,h,u=0;const f=i._roots;for(let g=0,m=f.length;g<m;g++)s=f[g],o=new Uint32Array(s),a=new Uint16Array(s),h=new Float32Array(s),p(0,u),u+=s.byteLength;function p(g,m,M=!1){const b=g*2;if(Se(b,a)){const x=Ie(g,o),_=Be(b,a);let E=1/0,d=1/0,l=1/0,y=-1/0,c=-1/0,R=-1/0;for(let T=x,v=x+_;T<v;T++){const S=3*i.resolveTriangleIndex(T);for(let A=0;A<3;A++){let w=S+A;w=n?n[w]:w;const C=r.getX(w),N=r.getY(w),F=r.getZ(w);C<E&&(E=C),C>y&&(y=C),N<d&&(d=N),N>c&&(c=N),F<l&&(l=F),F>R&&(R=F)}}return h[g+0]!==E||h[g+1]!==d||h[g+2]!==l||h[g+3]!==y||h[g+4]!==c||h[g+5]!==R?(h[g+0]=E,h[g+1]=d,h[g+2]=l,h[g+3]=y,h[g+4]=c,h[g+5]=R,!0):!1}else{const x=Ae(g),_=Te(g,o);let E=M,d=!1,l=!1;if(t){if(!E){const S=x/ye+m/Le,A=_/ye+m/Le;d=t.has(S),l=t.has(A),E=!d&&!l}}else d=!0,l=!0;const y=E||d,c=E||l;let R=!1;y&&(R=p(x,m,E));let T=!1;c&&(T=p(_,m,E));const v=R||T;if(v)for(let S=0;S<3;S++){const A=x+S,w=_+S,C=h[A],N=h[A+3],F=h[w],B=h[w+3];h[g+S]=C<F?C:F,h[g+S+3]=N>B?N:B}return v}}}function yy(i,t,e,n,r,s,o){ue.setBuffer(i._roots[t]),hc(0,i,e,n,r,s,o),ue.clearBuffer()}function hc(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:h,uint32Array:u}=ue,f=i*2;if(Se(f,h)){const g=Ie(i,u),m=Be(f,h);ay(t,e,n,g,m,r,s,o)}else{const g=Ae(i);vi(g,a,n,s,o)&&hc(g,t,e,n,r,s,o);const m=Te(i,u);vi(m,a,n,s,o)&&hc(m,t,e,n,r,s,o)}}const Sy=["x","y","z"];function My(i,t,e,n,r,s){ue.setBuffer(i._roots[t]);const o=uc(0,i,e,n,r,s);return ue.clearBuffer(),o}function uc(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:h}=ue;let u=i*2;if(Se(u,a)){const p=Ie(i,h),g=Be(u,a);return ly(t,e,n,p,g,r,s)}else{const p=Rc(i,h),g=Sy[p],M=n.direction[g]>=0;let b,x;M?(b=Ae(i),x=Te(i,h)):(b=Te(i,h),x=Ae(i));const E=vi(b,o,n,r,s)?uc(b,t,e,n,r,s):null;if(E){const y=E.point[g];if(M?y<=o[x+p]:y>=o[x+p+3])return E}const l=vi(x,o,n,r,s)?uc(x,t,e,n,r,s):null;return E&&l?E.distance<=l.distance?E:l:E||l||null}}const oo=new ke,mr=new Ke,_r=new Ke,Jr=new Kt,hu=new He,ao=new He;function by(i,t,e,n){ue.setBuffer(i._roots[t]);const r=fc(0,i,e,n);return ue.clearBuffer(),r}function fc(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ue;let h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),hu.set(e.boundingBox.min,e.boundingBox.max,n),r=hu),Se(h,o)){const f=t.geometry,p=f.index,g=f.attributes.position,m=e.index,M=e.attributes.position,b=Ie(i,a),x=Be(h,o);if(Jr.copy(n).invert(),e.boundsTree)return ge(i,s,ao),ao.matrix.copy(Jr),ao.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>ao.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let d=b,l=x+b;d<l;d++)if(xe(_r,3*t.resolveTriangleIndex(d),p,g),_r.needsUpdate=!0,E.intersectsTriangle(_r))return!0;return!1}});{const _=Xo(e);for(let E=b,d=x+b;E<d;E++){const l=t.resolveTriangleIndex(E);xe(mr,3*l,p,g),mr.a.applyMatrix4(Jr),mr.b.applyMatrix4(Jr),mr.c.applyMatrix4(Jr),mr.needsUpdate=!0;for(let y=0,c=_*3;y<c;y+=3)if(xe(_r,y,m,M),_r.needsUpdate=!0,mr.intersectsTriangle(_r))return!0}}}else{const f=Ae(i),p=Te(i,a);return ge(f,s,oo),!!(r.intersectsBox(oo)&&fc(f,t,e,n,r)||(ge(p,s,oo),r.intersectsBox(oo)&&fc(p,t,e,n,r)))}}const lo=new Kt,Ga=new He,jr=new He,Ey=new U,Ay=new U,Ty=new U,wy=new U;function Cy(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ga.set(t.boundingBox.min,t.boundingBox.max,e),Ga.needsUpdate=!0;const a=i.geometry,h=a.attributes.position,u=a.index,f=t.attributes.position,p=t.index,g=fn.getPrimitive(),m=fn.getPrimitive();let M=Ey,b=Ay,x=null,_=null;r&&(x=Ty,_=wy);let E=1/0,d=null,l=null;return lo.copy(e).invert(),jr.matrix.copy(lo),i.shapecast({boundsTraverseOrder:y=>Ga.distanceToBox(y),intersectsBounds:(y,c,R)=>R<E&&R<o?(c&&(jr.min.copy(y.min),jr.max.copy(y.max),jr.needsUpdate=!0),!0):!1,intersectsRange:(y,c)=>{if(t.boundsTree){const R=t.boundsTree;return R.shapecast({boundsTraverseOrder:T=>jr.distanceToBox(T),intersectsBounds:(T,v,S)=>S<E&&S<o,intersectsRange:(T,v)=>{for(let S=T,A=T+v;S<A;S++){const w=R.resolveTriangleIndex(S);xe(m,3*w,p,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let C=y,N=y+c;C<N;C++){const F=i.resolveTriangleIndex(C);xe(g,3*F,u,h),g.needsUpdate=!0;const B=g.distanceToTriangle(m,M,x);if(B<E&&(b.copy(M),_&&_.copy(x),E=B,d=C,l=S),B<s)return!0}}}})}else{const R=Xo(t);for(let T=0,v=R;T<v;T++){xe(m,3*T,p,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let S=y,A=y+c;S<A;S++){const w=i.resolveTriangleIndex(S);xe(g,3*w,u,h),g.needsUpdate=!0;const C=g.distanceToTriangle(m,M,x);if(C<E&&(b.copy(M),_&&_.copy(x),E=C,d=S,l=T),C<s)return!0}}}}}),fn.releasePrimitive(g),fn.releasePrimitive(m),E===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=E,n.faceIndex=d,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(lo),b.applyMatrix4(lo),r.distance=b.sub(r.point).length(),r.faceIndex=l),n)}function uu(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const co=new He,ho=new xs,fu=new U,du=new Kt,pu=new U,Wa=["getX","getY","getZ"];class No extends Zv{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(h=>h.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),h(s));const a=new No(e,{...n,[Cc]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const u=e.getIndex();if(u===null){const f=new Ze(t.index,1,!1);e.setIndex(f)}else u.array!==r&&(u.array.set(r),u.needsUpdate=!0)}return a;function h(u){for(let f=0;f<u.length;f++){const p=u[f],g=new Uint32Array(p),m=new Uint16Array(p);for(let M=0,b=p.byteLength/Le;M<b;M++){const x=ye*M,_=2*x;Se(_,m)||(g[x+6]=g[x+6]/ye-M)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),e={...e,maxLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,u=(s?s[t]:t)*3;let f=u+0,p=u+1,g=u+2;a&&(f=a[f],p=a[p],g=a[g]);for(let m=0;m<3;m++){const M=o[Wa[m]](f),b=o[Wa[m]](p),x=o[Wa[m]](g);let _=M;b<_&&(_=b),x<_&&(_=x);let E=M;b>E&&(E=b),x>E&&(E=x),e[n+m]=_,e[n+m+3]=E}return e}computePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,h=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const u=o.array,f=o.offset||0;let p=3;o.isInterleavedBufferAttribute&&(p=o.data.stride);const g=["getX","getY","getZ"],m=n.offset;for(let M=t,b=t+e;M<b;M++){const _=(s?s[M]:M)*3,E=(M-m)*6;let d=_+0,l=_+1,y=_+2;a&&(d=a[d],l=a[l],y=a[y]),h||(d=d*p+f,l=l*p+f,y=y*p+f);for(let c=0;c<3;c++){let R,T,v;h?(R=o[g[c]](d),T=o[g[c]](l),v=o[g[c]](y)):(R=u[d+c],T=u[l+c],v=u[y+c]);let S=R;T<S&&(S=T),v<S&&(S=v);let A=R;T>A&&(A=T),v>A&&(A=v);const w=(A-S)/2,C=c*2;n[E+C+0]=S+w,n[E+C+1]=w+(Math.abs(S)+w)*To}}return n}raycastObject3D(t,e,n=[]){const{material:r}=t;if(r===void 0)return;du.copy(t.matrixWorld).invert(),ho.copy(e.ray).applyMatrix4(du),pu.setFromMatrixScale(t.matrixWorld),fu.copy(ho.direction).multiply(pu);const s=fu.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let h=this.raycastFirst(ho,r,o,a);h=uu(h,t,e),h&&n.push(h)}else{const h=this.raycast(ho,r,o,a);for(let u=0,f=h.length;u<f;u++){const p=uu(h[u],t,e);p&&n.push(p)}}return n}refit(t=null){return(this.indirect?vy:oy)(this,t)}raycast(t,e=Fn,n=0,r=1/0){const s=this._roots,o=[],a=this.indirect?yy:hy;for(let h=0,u=s.length;h<u;h++)a(this,h,e,t,o,n,r);return o}raycastFirst(t,e=Fn,n=0,r=1/0){const s=this._roots;let o=null;const a=this.indirect?My:fy;for(let h=0,u=s.length;h<u;h++){const f=a(this,h,e,t,n,r);f!=null&&(o==null||f.distance<o.distance)&&(o=f)}return o}intersectsGeometry(t,e){let n=!1;const r=this._roots,s=this.indirect?by:dy;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){const e=fn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?cy:sy});return fn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const o=fn.getPrimitive(),a=this.geometry.index,h=this.geometry.attributes.position,u=this.indirect?M=>{const b=this.resolveTriangleIndex(M);xe(o,b*3,a,h)}:M=>{xe(o,M*3,a,h)},f=fn.getPrimitive(),p=t.geometry.index,g=t.geometry.attributes.position,m=t.indirect?M=>{const b=t.resolveTriangleIndex(M);xe(f,b*3,p,g)}:M=>{xe(f,M*3,p,g)};if(s){if(!(t instanceof No))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const M=(b,x,_,E,d,l,y,c)=>{for(let R=_,T=_+E;R<T;R++){m(R),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let v=b,S=b+x;v<S;v++)if(u(v),o.needsUpdate=!0,s(o,f,v,R,d,l,y,c))return!0}return!1};if(r){const b=r;r=function(x,_,E,d,l,y,c,R){return b(x,_,E,d,l,y,c,R)?!0:M(x,_,E,d,l,y,c,R)}}else r=M}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return co.set(t.min,t.max,e),co.needsUpdate=!0,this.shapecast({intersectsBounds:n=>co.intersectsBox(n),intersectsTriangle:n=>co.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?Cy:xy)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return ty(this,t,e,n,r)}}const Xf=1e-6,Ry=Xf*.5,qf=Math.pow(10,-Math.log10(Xf)),Py=Ry*qf;function Ln(i){return~~(i*qf+Py)}function Dy(i){return`${Ln(i.x)},${Ln(i.y)}`}function gu(i){return`${Ln(i.x)},${Ln(i.y)},${Ln(i.z)}`}function Ly(i){return`${Ln(i.x)},${Ln(i.y)},${Ln(i.z)},${Ln(i.w)}`}function Iy(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function $f(){return typeof SharedArrayBuffer<"u"}function Uy(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function Ny(i){return i.index?i.index.count:i.attributes.position.count}function Ic(i){return Ny(i)/3}const Fy=1e-8,Oy=new U;function By(i){return~~(i/3)}function zy(i){return i%3}function mu(i,t){return i.start-t.start}function _u(i,t){return Oy.subVectors(t,i.origin).dot(i.direction)}function Vy(i,t,e,n=Fy){i.sort(mu),t.sort(mu);for(let a=0;a<i.length;a++){const h=i[a];for(let u=0;u<t.length;u++){const f=t[u];if(!(f.start>h.end)){if(h.end<f.start||f.end<h.start)continue;if(h.start<=f.start&&h.end>=f.end)s(f.end,h.end)||i.splice(a+1,0,{start:f.end,end:h.end,index:h.index}),h.end=f.start,f.start=0,f.end=0;else if(h.start>=f.start&&h.end<=f.end)s(h.end,f.end)||t.splice(u+1,0,{start:h.end,end:f.end,index:f.index}),f.end=h.start,h.start=0,h.end=0;else if(h.start<=f.start&&h.end<=f.end){const p=h.end;h.end=f.start,f.start=p}else if(h.start>=f.start&&h.end>=f.end){const p=f.end;f.end=h.start,h.start=p}else throw new Error}if(e.has(h.index)||e.set(h.index,[]),e.has(f.index)||e.set(f.index,[]),e.get(h.index).push(f.index),e.get(f.index).push(h.index),o(f)&&(t.splice(u,1),u--),o(h)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let h=0;h<a.length;h++)o(a[h])&&(a.splice(h,1),h--)}function s(a,h){return Math.abs(h-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}const xu=1e-5,vu=1e-4;class ky{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let h=0,u=e.length;h<u;h++){const f=e[h];if(o(f,t)&&o(f,n))continue;const p=a(f,t),g=a(f,n),m=Math.min(p,g);m<r&&(r=m,s=f)}return s;function o(h,u){const f=h.origin.distanceTo(u.origin)>xu;return h.direction.angleTo(u.direction)>vu||f}function a(h,u){const f=h.origin.distanceTo(u.origin),p=h.direction.angleTo(u.direction);return f/xu+p/vu}}}const Xa=new U,qa=new U,uo=new xs;function Hy(i,t,e){const n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,h=Array.from(t),u=new ky;for(let f=0,p=h.length;f<p;f++){const g=h[f],m=By(g),M=zy(g);let b=3*m+M,x=3*m+(M+1)%3;r&&(b=r.getX(b),x=r.getX(x)),Xa.fromBufferAttribute(s,b),qa.fromBufferAttribute(s,x),Iy(Xa,qa,uo);let _,E=u.findClosestRay(uo);E===null&&(E=uo.clone(),u.addRay(E)),a.has(E)||a.set(E,{forward:[],reverse:[],ray:E}),_=a.get(E);let d=_u(E,Xa),l=_u(E,qa);d>l&&([d,l]=[l,d]),uo.direction.dot(E.direction)<0?_.reverse.push({start:d,end:l,index:g}):_.forward.push({start:d,end:l,index:g})}return a.forEach(({forward:f,reverse:p},g)=>{Vy(f,p,o,e),f.length===0&&p.length===0&&a.delete(g)}),{disjointConnectivityMap:o,fragmentMap:a}}const Gy=new pt,$a=new U,Wy=new ce,Ya=["","",""];class Xy{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?d:E,a=new Map,{attributes:h}=t,u=e?Object.keys(h):null,f=t.index,p=h.position;let g=Ic(t);const m=g;let M=0;n&&(M=t.drawRange.start,t.drawRange.count!==1/0&&(g=~~(t.drawRange.count/3)));let b=this.data;(!b||b.length<3*m)&&(b=new Int32Array(3*m)),b.fill(-1);let x=0,_=new Set;for(let l=M,y=g*3+M;l<y;l+=3){const c=l;for(let R=0;R<3;R++){let T=c+R;f&&(T=f.getX(T)),Ya[R]=o(T)}for(let R=0;R<3;R++){const T=(R+1)%3,v=Ya[R],S=Ya[T],A=`${S}_${v}`;if(a.has(A)){const w=c+R,C=a.get(A);b[w]=C,b[C]=w,a.delete(A),x+=2,_.delete(C)}else{const w=`${v}_${S}`,C=c+R;a.set(w,C),_.add(C)}}}if(r){const{fragmentMap:l,disjointConnectivityMap:y}=Hy(t,_,s);_.clear(),l.forEach(({forward:c,reverse:R})=>{c.forEach(({index:T})=>_.add(T)),R.forEach(({index:T})=>_.add(T))}),this.unmatchedDisjointEdges=l,this.disjointConnections=y,x=g*3-_.size}this.matchedEdges=x,this.unmatchedEdges=_.size,this.data=b;function E(l){return $a.fromBufferAttribute(p,l),gu($a)}function d(l){let y="";for(let c=0,R=u.length;c<R;c++){const T=h[u[c]];let v;switch(T.itemSize){case 1:v=Ln(T.getX(l));break;case 2:v=Dy(Gy.fromBufferAttribute(T,l));break;case 3:v=gu($a.fromBufferAttribute(T,l));break;case 4:v=Ly(Wy.fromBufferAttribute(T,l));break}y!==""&&(y+="|"),y+=v}return y}}}class Fo extends Ne{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Kt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=$f(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,h=`${t.uuid}_${o}_${a}`;if(this._hash===h)return;if(this._hash=h,n)for(const g in e){const m=e[g];if(m.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");m.array=Uy(m.array)}t.boundsTree=new No(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new Xy),t.halfEdges.updateFrom(t);const u=Ic(t);(!t.groupIndices||t.groupIndices.length!==u)&&(t.groupIndices=new Uint16Array(u));const f=t.groupIndices,p=t.groups;for(let g=0,m=p.length;g<m;g++){const{start:M,count:b}=p[g];for(let x=M/3,_=(M+b)/3;x<_;x++)f[x]=g}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}var qy=Object.getOwnPropertyNames,rn=(i,t)=>function(){return t||(0,i[qy(i)[0]])((t={exports:{}}).exports,t),t.exports},$o=rn({"node_modules/binary-search-bounds/search-bounds.js"(i,t){function e(h,u,f,p,g){for(var m=g+1;p<=g;){var M=p+g>>>1,b=h[M],x=f!==void 0?f(b,u):b-u;x>=0?(m=M,g=M-1):p=M+1}return m}function n(h,u,f,p,g){for(var m=g+1;p<=g;){var M=p+g>>>1,b=h[M],x=f!==void 0?f(b,u):b-u;x>0?(m=M,g=M-1):p=M+1}return m}function r(h,u,f,p,g){for(var m=p-1;p<=g;){var M=p+g>>>1,b=h[M],x=f!==void 0?f(b,u):b-u;x<0?(m=M,p=M+1):g=M-1}return m}function s(h,u,f,p,g){for(var m=p-1;p<=g;){var M=p+g>>>1,b=h[M],x=f!==void 0?f(b,u):b-u;x<=0?(m=M,p=M+1):g=M-1}return m}function o(h,u,f,p,g){for(;p<=g;){var m=p+g>>>1,M=h[m],b=f!==void 0?f(M,u):M-u;if(b===0)return m;b<=0?p=m+1:g=m-1}return-1}function a(h,u,f,p,g,m){return typeof f=="function"?m(h,u,f,p===void 0?0:p|0,g===void 0?h.length-1:g|0):m(h,u,void 0,f===void 0?0:f|0,p===void 0?h.length-1:p|0)}t.exports={ge:function(h,u,f,p,g){return a(h,u,f,p,g,e)},gt:function(h,u,f,p,g){return a(h,u,f,p,g,n)},lt:function(h,u,f,p,g){return a(h,u,f,p,g,r)},le:function(h,u,f,p,g){return a(h,u,f,p,g,s)},eq:function(h,u,f,p,g){return a(h,u,f,p,g,o)}}}}),Uc=rn({"node_modules/two-product/two-product.js"(i,t){t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var a=r*s,h=e*r,u=h-r,f=h-u,p=r-f,g=e*s,m=g-s,M=g-m,b=s-M,x=a-f*M,_=x-p*M,E=_-f*b,d=p*b-E;return o?(o[0]=d,o[1]=a,o):[d,a]}}}),Yf=rn({"node_modules/robust-sum/robust-sum.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,h=o-a,u=s-a,f=r-h,p=f+u;return p?[p,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var h=o+a,u=new Array(h),f=0,p=0,g=0,m=Math.abs,M=r[p],b=m(M),x=s[g],_=m(x),E,d;b<_?(d=M,p+=1,p<o&&(M=r[p],b=m(M))):(d=x,g+=1,g<a&&(x=s[g],_=m(x))),p<o&&b<_||g>=a?(E=M,p+=1,p<o&&(M=r[p],b=m(M))):(E=x,g+=1,g<a&&(x=s[g],_=m(x)));for(var l=E+d,y=l-E,c=d-y,R=c,T=l,v,S,A,w,C;p<o&&g<a;)b<_?(E=M,p+=1,p<o&&(M=r[p],b=m(M))):(E=x,g+=1,g<a&&(x=s[g],_=m(x))),d=R,l=E+d,y=l-E,c=d-y,c&&(u[f++]=c),v=T+l,S=v-T,A=v-S,w=l-S,C=T-A,R=C+w,T=v;for(;p<o;)E=M,d=R,l=E+d,y=l-E,c=d-y,c&&(u[f++]=c),v=T+l,S=v-T,A=v-S,w=l-S,C=T-A,R=C+w,T=v,p+=1,p<o&&(M=r[p]);for(;g<a;)E=x,d=R,l=E+d,y=l-E,c=d-y,c&&(u[f++]=c),v=T+l,S=v-T,A=v-S,w=l-S,C=T-A,R=C+w,T=v,g+=1,g<a&&(x=s[g]);return R&&(u[f++]=R),T&&(u[f++]=T),f||(u[f++]=0),u.length=f,u}}}),$y=rn({"node_modules/two-sum/two-sum.js"(i,t){t.exports=e;function e(n,r,s){var o=n+r,a=o-n,h=o-a,u=r-a,f=n-h;return s?(s[0]=f+u,s[1]=o,s):[f+u,o]}}}),Zf=rn({"node_modules/robust-scale/robust-scale.js"(i,t){var e=Uc(),n=$y();t.exports=r;function r(s,o){var a=s.length;if(a===1){var h=e(s[0],o);return h[0]?h:[h[1]]}var u=new Array(2*a),f=[.1,.1],p=[.1,.1],g=0;e(s[0],o,f),f[0]&&(u[g++]=f[0]);for(var m=1;m<a;++m){e(s[m],o,p);var M=f[1];n(M,p[0],f),f[0]&&(u[g++]=f[0]);var b=p[1],x=f[1],_=b+x,E=_-b,d=x-E;f[1]=_,d&&(u[g++]=d)}return f[1]&&(u[g++]=f[1]),g===0&&(u[g++]=0),u.length=g,u}}}),Kf=rn({"node_modules/robust-subtract/robust-diff.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,h=o-a,u=s-a,f=r-h,p=f+u;return p?[p,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var h=o+a,u=new Array(h),f=0,p=0,g=0,m=Math.abs,M=r[p],b=m(M),x=-s[g],_=m(x),E,d;b<_?(d=M,p+=1,p<o&&(M=r[p],b=m(M))):(d=x,g+=1,g<a&&(x=-s[g],_=m(x))),p<o&&b<_||g>=a?(E=M,p+=1,p<o&&(M=r[p],b=m(M))):(E=x,g+=1,g<a&&(x=-s[g],_=m(x)));for(var l=E+d,y=l-E,c=d-y,R=c,T=l,v,S,A,w,C;p<o&&g<a;)b<_?(E=M,p+=1,p<o&&(M=r[p],b=m(M))):(E=x,g+=1,g<a&&(x=-s[g],_=m(x))),d=R,l=E+d,y=l-E,c=d-y,c&&(u[f++]=c),v=T+l,S=v-T,A=v-S,w=l-S,C=T-A,R=C+w,T=v;for(;p<o;)E=M,d=R,l=E+d,y=l-E,c=d-y,c&&(u[f++]=c),v=T+l,S=v-T,A=v-S,w=l-S,C=T-A,R=C+w,T=v,p+=1,p<o&&(M=r[p]);for(;g<a;)E=x,d=R,l=E+d,y=l-E,c=d-y,c&&(u[f++]=c),v=T+l,S=v-T,A=v-S,w=l-S,C=T-A,R=C+w,T=v,g+=1,g<a&&(x=-s[g]);return R&&(u[f++]=R),T&&(u[f++]=T),f||(u[f++]=0),u.length=f,u}}}),Yy=rn({"node_modules/robust-orientation/orientation.js"(i,t){var e=Uc(),n=Yf(),r=Zf(),s=Kf(),o=5,a=11102230246251565e-32,h=(3+16*a)*a,u=(7+56*a)*a;function f(l,y,c,R){return function(v,S,A){var w=l(l(y(S[1],A[0]),y(-A[1],S[0])),l(y(v[1],S[0]),y(-S[1],v[0]))),C=l(y(v[1],A[0]),y(-A[1],v[0])),N=R(w,C);return N[N.length-1]}}function p(l,y,c,R){return function(v,S,A,w){var C=l(l(c(l(y(A[1],w[0]),y(-w[1],A[0])),S[2]),l(c(l(y(S[1],w[0]),y(-w[1],S[0])),-A[2]),c(l(y(S[1],A[0]),y(-A[1],S[0])),w[2]))),l(c(l(y(S[1],w[0]),y(-w[1],S[0])),v[2]),l(c(l(y(v[1],w[0]),y(-w[1],v[0])),-S[2]),c(l(y(v[1],S[0]),y(-S[1],v[0])),w[2])))),N=l(l(c(l(y(A[1],w[0]),y(-w[1],A[0])),v[2]),l(c(l(y(v[1],w[0]),y(-w[1],v[0])),-A[2]),c(l(y(v[1],A[0]),y(-A[1],v[0])),w[2]))),l(c(l(y(S[1],A[0]),y(-A[1],S[0])),v[2]),l(c(l(y(v[1],A[0]),y(-A[1],v[0])),-S[2]),c(l(y(v[1],S[0]),y(-S[1],v[0])),A[2])))),F=R(C,N);return F[F.length-1]}}function g(l,y,c,R){return function(v,S,A,w,C){var N=l(l(l(c(l(c(l(y(w[1],C[0]),y(-C[1],w[0])),A[2]),l(c(l(y(A[1],C[0]),y(-C[1],A[0])),-w[2]),c(l(y(A[1],w[0]),y(-w[1],A[0])),C[2]))),S[3]),l(c(l(c(l(y(w[1],C[0]),y(-C[1],w[0])),S[2]),l(c(l(y(S[1],C[0]),y(-C[1],S[0])),-w[2]),c(l(y(S[1],w[0]),y(-w[1],S[0])),C[2]))),-A[3]),c(l(c(l(y(A[1],C[0]),y(-C[1],A[0])),S[2]),l(c(l(y(S[1],C[0]),y(-C[1],S[0])),-A[2]),c(l(y(S[1],A[0]),y(-A[1],S[0])),C[2]))),w[3]))),l(c(l(c(l(y(A[1],w[0]),y(-w[1],A[0])),S[2]),l(c(l(y(S[1],w[0]),y(-w[1],S[0])),-A[2]),c(l(y(S[1],A[0]),y(-A[1],S[0])),w[2]))),-C[3]),l(c(l(c(l(y(w[1],C[0]),y(-C[1],w[0])),S[2]),l(c(l(y(S[1],C[0]),y(-C[1],S[0])),-w[2]),c(l(y(S[1],w[0]),y(-w[1],S[0])),C[2]))),v[3]),c(l(c(l(y(w[1],C[0]),y(-C[1],w[0])),v[2]),l(c(l(y(v[1],C[0]),y(-C[1],v[0])),-w[2]),c(l(y(v[1],w[0]),y(-w[1],v[0])),C[2]))),-S[3])))),l(l(c(l(c(l(y(S[1],C[0]),y(-C[1],S[0])),v[2]),l(c(l(y(v[1],C[0]),y(-C[1],v[0])),-S[2]),c(l(y(v[1],S[0]),y(-S[1],v[0])),C[2]))),w[3]),l(c(l(c(l(y(S[1],w[0]),y(-w[1],S[0])),v[2]),l(c(l(y(v[1],w[0]),y(-w[1],v[0])),-S[2]),c(l(y(v[1],S[0]),y(-S[1],v[0])),w[2]))),-C[3]),c(l(c(l(y(A[1],w[0]),y(-w[1],A[0])),S[2]),l(c(l(y(S[1],w[0]),y(-w[1],S[0])),-A[2]),c(l(y(S[1],A[0]),y(-A[1],S[0])),w[2]))),v[3]))),l(c(l(c(l(y(A[1],w[0]),y(-w[1],A[0])),v[2]),l(c(l(y(v[1],w[0]),y(-w[1],v[0])),-A[2]),c(l(y(v[1],A[0]),y(-A[1],v[0])),w[2]))),-S[3]),l(c(l(c(l(y(S[1],w[0]),y(-w[1],S[0])),v[2]),l(c(l(y(v[1],w[0]),y(-w[1],v[0])),-S[2]),c(l(y(v[1],S[0]),y(-S[1],v[0])),w[2]))),A[3]),c(l(c(l(y(S[1],A[0]),y(-A[1],S[0])),v[2]),l(c(l(y(v[1],A[0]),y(-A[1],v[0])),-S[2]),c(l(y(v[1],S[0]),y(-S[1],v[0])),A[2]))),-w[3]))))),F=l(l(l(c(l(c(l(y(w[1],C[0]),y(-C[1],w[0])),A[2]),l(c(l(y(A[1],C[0]),y(-C[1],A[0])),-w[2]),c(l(y(A[1],w[0]),y(-w[1],A[0])),C[2]))),v[3]),c(l(c(l(y(w[1],C[0]),y(-C[1],w[0])),v[2]),l(c(l(y(v[1],C[0]),y(-C[1],v[0])),-w[2]),c(l(y(v[1],w[0]),y(-w[1],v[0])),C[2]))),-A[3])),l(c(l(c(l(y(A[1],C[0]),y(-C[1],A[0])),v[2]),l(c(l(y(v[1],C[0]),y(-C[1],v[0])),-A[2]),c(l(y(v[1],A[0]),y(-A[1],v[0])),C[2]))),w[3]),c(l(c(l(y(A[1],w[0]),y(-w[1],A[0])),v[2]),l(c(l(y(v[1],w[0]),y(-w[1],v[0])),-A[2]),c(l(y(v[1],A[0]),y(-A[1],v[0])),w[2]))),-C[3]))),l(l(c(l(c(l(y(A[1],C[0]),y(-C[1],A[0])),S[2]),l(c(l(y(S[1],C[0]),y(-C[1],S[0])),-A[2]),c(l(y(S[1],A[0]),y(-A[1],S[0])),C[2]))),v[3]),c(l(c(l(y(A[1],C[0]),y(-C[1],A[0])),v[2]),l(c(l(y(v[1],C[0]),y(-C[1],v[0])),-A[2]),c(l(y(v[1],A[0]),y(-A[1],v[0])),C[2]))),-S[3])),l(c(l(c(l(y(S[1],C[0]),y(-C[1],S[0])),v[2]),l(c(l(y(v[1],C[0]),y(-C[1],v[0])),-S[2]),c(l(y(v[1],S[0]),y(-S[1],v[0])),C[2]))),A[3]),c(l(c(l(y(S[1],A[0]),y(-A[1],S[0])),v[2]),l(c(l(y(v[1],A[0]),y(-A[1],v[0])),-S[2]),c(l(y(v[1],S[0]),y(-S[1],v[0])),A[2]))),-C[3])))),B=R(N,F);return B[B.length-1]}}function m(l){var y=l===3?f:l===4?p:g;return y(n,e,r,s)}var M=m(3),b=m(4),x=[function(){return 0},function(){return 0},function(y,c){return c[0]-y[0]},function(y,c,R){var T=(y[1]-R[1])*(c[0]-R[0]),v=(y[0]-R[0])*(c[1]-R[1]),S=T-v,A;if(T>0){if(v<=0)return S;A=T+v}else if(T<0){if(v>=0)return S;A=-(T+v)}else return S;var w=h*A;return S>=w||S<=-w?S:M(y,c,R)},function(y,c,R,T){var v=y[0]-T[0],S=c[0]-T[0],A=R[0]-T[0],w=y[1]-T[1],C=c[1]-T[1],N=R[1]-T[1],F=y[2]-T[2],B=c[2]-T[2],O=R[2]-T[2],H=S*N,K=A*C,nt=A*w,tt=v*N,ft=v*C,dt=S*w,At=F*(H-K)+B*(nt-tt)+O*(ft-dt),Tt=(Math.abs(H)+Math.abs(K))*Math.abs(F)+(Math.abs(nt)+Math.abs(tt))*Math.abs(B)+(Math.abs(ft)+Math.abs(dt))*Math.abs(O),$=u*Tt;return At>$||-At>$?At:b(y,c,R,T)}];function _(l){var y=x[l.length];return y||(y=x[l.length]=m(l.length)),y.apply(void 0,l)}function E(l,y,c,R,T,v,S){return function(w,C,N,F,B){switch(arguments.length){case 0:case 1:return 0;case 2:return R(w,C);case 3:return T(w,C,N);case 4:return v(w,C,N,F);case 5:return S(w,C,N,F,B)}for(var O=new Array(arguments.length),H=0;H<arguments.length;++H)O[H]=arguments[H];return l(O)}}function d(){for(;x.length<=o;)x.push(m(x.length));t.exports=E.apply(void 0,[_].concat(x));for(var l=0;l<=o;++l)t.exports[l]=x[l]}d()}}),Zy=rn({"node_modules/cdt2d/lib/monotone.js"(i,t){var e=$o(),n=Yy()[3],r=0,s=1,o=2;t.exports=b;function a(x,_,E,d,l){this.a=x,this.b=_,this.idx=E,this.lowerIds=d,this.upperIds=l}function h(x,_,E,d){this.a=x,this.b=_,this.type=E,this.idx=d}function u(x,_){var E=x.a[0]-_.a[0]||x.a[1]-_.a[1]||x.type-_.type;return E||x.type!==r&&(E=n(x.a,x.b,_.b),E)?E:x.idx-_.idx}function f(x,_){return n(x.a,x.b,_)}function p(x,_,E,d,l){for(var y=e.lt(_,d,f),c=e.gt(_,d,f),R=y;R<c;++R){for(var T=_[R],v=T.lowerIds,A=v.length;A>1&&n(E[v[A-2]],E[v[A-1]],d)>0;)x.push([v[A-1],v[A-2],l]),A-=1;v.length=A,v.push(l);for(var S=T.upperIds,A=S.length;A>1&&n(E[S[A-2]],E[S[A-1]],d)<0;)x.push([S[A-2],S[A-1],l]),A-=1;S.length=A,S.push(l)}}function g(x,_){var E;return x.a[0]<_.a[0]?E=n(x.a,x.b,_.a):E=n(_.b,_.a,x.a),E||(_.b[0]<x.b[0]?E=n(x.a,x.b,_.b):E=n(_.b,_.a,x.b),E||x.idx-_.idx)}function m(x,_,E){var d=e.le(x,E,g),l=x[d],y=l.upperIds,c=y[y.length-1];l.upperIds=[c],x.splice(d+1,0,new a(E.a,E.b,E.idx,[c],y))}function M(x,_,E){var d=E.a;E.a=E.b,E.b=d;var l=e.eq(x,E,g),y=x[l],c=x[l-1];c.upperIds=y.upperIds,x.splice(l,1)}function b(x,_){for(var E=x.length,d=_.length,l=[],y=0;y<E;++y)l.push(new h(x[y],null,r,y));for(var y=0;y<d;++y){var c=_[y],R=x[c[0]],T=x[c[1]];R[0]<T[0]?l.push(new h(R,T,o,y),new h(T,R,s,y)):R[0]>T[0]&&l.push(new h(T,R,o,y),new h(R,T,s,y))}l.sort(u);for(var v=l[0].a[0]-(1+Math.abs(l[0].a[0]))*Math.pow(2,-52),S=[new a([v,1],[v,0],-1,[],[])],A=[],y=0,w=l.length;y<w;++y){var C=l[y],N=C.type;N===r?p(A,S,x,C.a,C.idx):N===o?m(S,x,C):M(S,x,C)}return A}}}),Ky=rn({"node_modules/cdt2d/lib/triangulation.js"(i,t){var e=$o();t.exports=o;function n(a,h){this.stars=a,this.edges=h}var r=n.prototype;function s(a,h,u){for(var f=1,p=a.length;f<p;f+=2)if(a[f-1]===h&&a[f]===u){a[f-1]=a[p-2],a[f]=a[p-1],a.length=p-2;return}}r.isConstraint=(function(){var a=[0,0];function h(u,f){return u[0]-f[0]||u[1]-f[1]}return function(u,f){return a[0]=Math.min(u,f),a[1]=Math.max(u,f),e.eq(this.edges,a,h)>=0}})(),r.removeTriangle=function(a,h,u){var f=this.stars;s(f[a],h,u),s(f[h],u,a),s(f[u],a,h)},r.addTriangle=function(a,h,u){var f=this.stars;f[a].push(h,u),f[h].push(u,a),f[u].push(a,h)},r.opposite=function(a,h){for(var u=this.stars[h],f=1,p=u.length;f<p;f+=2)if(u[f]===a)return u[f-1];return-1},r.flip=function(a,h){var u=this.opposite(a,h),f=this.opposite(h,a);this.removeTriangle(a,h,u),this.removeTriangle(h,a,f),this.addTriangle(a,f,u),this.addTriangle(h,u,f)},r.edges=function(){for(var a=this.stars,h=[],u=0,f=a.length;u<f;++u)for(var p=a[u],g=0,m=p.length;g<m;g+=2)h.push([p[g],p[g+1]]);return h},r.cells=function(){for(var a=this.stars,h=[],u=0,f=a.length;u<f;++u)for(var p=a[u],g=0,m=p.length;g<m;g+=2){var M=p[g],b=p[g+1];u<Math.min(M,b)&&h.push([u,M,b])}return h};function o(a,h){for(var u=new Array(a),f=0;f<a;++f)u[f]=[];return new n(u,h)}}}),Jy=rn({"node_modules/robust-in-sphere/in-sphere.js"(i,t){var e=Uc(),n=Yf(),r=Kf(),s=Zf(),o=6;function a(d){var l=d===3?p:d===4?g:d===5?m:M;return l(n,r,e,s)}function h(){return 0}function u(){return 0}function f(){return 0}function p(d,l,y,c){function R(T,v,S){var A=y(T[0],T[0]),w=c(A,v[0]),C=c(A,S[0]),N=y(v[0],v[0]),F=c(N,T[0]),B=c(N,S[0]),O=y(S[0],S[0]),H=c(O,T[0]),K=c(O,v[0]),nt=d(l(K,B),l(F,w)),tt=l(H,C),ft=l(nt,tt);return ft[ft.length-1]}return R}function g(d,l,y,c){function R(T,v,S,A){var w=d(y(T[0],T[0]),y(T[1],T[1])),C=c(w,v[0]),N=c(w,S[0]),F=c(w,A[0]),B=d(y(v[0],v[0]),y(v[1],v[1])),O=c(B,T[0]),H=c(B,S[0]),K=c(B,A[0]),nt=d(y(S[0],S[0]),y(S[1],S[1])),tt=c(nt,T[0]),ft=c(nt,v[0]),dt=c(nt,A[0]),At=d(y(A[0],A[0]),y(A[1],A[1])),Tt=c(At,T[0]),$=c(At,v[0]),J=c(At,S[0]),ot=d(d(c(l(J,dt),v[1]),d(c(l($,K),-S[1]),c(l(ft,H),A[1]))),d(c(l($,K),T[1]),d(c(l(Tt,F),-v[1]),c(l(O,C),A[1])))),ht=d(d(c(l(J,dt),T[1]),d(c(l(Tt,F),-S[1]),c(l(tt,N),A[1]))),d(c(l(ft,H),T[1]),d(c(l(tt,N),-v[1]),c(l(O,C),S[1])))),at=l(ot,ht);return at[at.length-1]}return R}function m(d,l,y,c){function R(T,v,S,A,w){var C=d(y(T[0],T[0]),d(y(T[1],T[1]),y(T[2],T[2]))),N=c(C,v[0]),F=c(C,S[0]),B=c(C,A[0]),O=c(C,w[0]),H=d(y(v[0],v[0]),d(y(v[1],v[1]),y(v[2],v[2]))),K=c(H,T[0]),nt=c(H,S[0]),tt=c(H,A[0]),ft=c(H,w[0]),dt=d(y(S[0],S[0]),d(y(S[1],S[1]),y(S[2],S[2]))),At=c(dt,T[0]),Tt=c(dt,v[0]),$=c(dt,A[0]),J=c(dt,w[0]),ot=d(y(A[0],A[0]),d(y(A[1],A[1]),y(A[2],A[2]))),ht=c(ot,T[0]),at=c(ot,v[0]),Pt=c(ot,S[0]),Gt=c(ot,w[0]),wt=d(y(w[0],w[0]),d(y(w[1],w[1]),y(w[2],w[2]))),Z=c(wt,T[0]),et=c(wt,v[0]),j=c(wt,S[0]),st=c(wt,A[0]),I=d(d(d(c(d(c(l(st,Gt),S[1]),d(c(l(j,J),-A[1]),c(l(Pt,$),w[1]))),v[2]),d(c(d(c(l(st,Gt),v[1]),d(c(l(et,ft),-A[1]),c(l(at,tt),w[1]))),-S[2]),c(d(c(l(j,J),v[1]),d(c(l(et,ft),-S[1]),c(l(Tt,nt),w[1]))),A[2]))),d(c(d(c(l(Pt,$),v[1]),d(c(l(at,tt),-S[1]),c(l(Tt,nt),A[1]))),-w[2]),d(c(d(c(l(st,Gt),v[1]),d(c(l(et,ft),-A[1]),c(l(at,tt),w[1]))),T[2]),c(d(c(l(st,Gt),T[1]),d(c(l(Z,O),-A[1]),c(l(ht,B),w[1]))),-v[2])))),d(d(c(d(c(l(et,ft),T[1]),d(c(l(Z,O),-v[1]),c(l(K,N),w[1]))),A[2]),d(c(d(c(l(at,tt),T[1]),d(c(l(ht,B),-v[1]),c(l(K,N),A[1]))),-w[2]),c(d(c(l(Pt,$),v[1]),d(c(l(at,tt),-S[1]),c(l(Tt,nt),A[1]))),T[2]))),d(c(d(c(l(Pt,$),T[1]),d(c(l(ht,B),-S[1]),c(l(At,F),A[1]))),-v[2]),d(c(d(c(l(at,tt),T[1]),d(c(l(ht,B),-v[1]),c(l(K,N),A[1]))),S[2]),c(d(c(l(Tt,nt),T[1]),d(c(l(At,F),-v[1]),c(l(K,N),S[1]))),-A[2]))))),xt=d(d(d(c(d(c(l(st,Gt),S[1]),d(c(l(j,J),-A[1]),c(l(Pt,$),w[1]))),T[2]),c(d(c(l(st,Gt),T[1]),d(c(l(Z,O),-A[1]),c(l(ht,B),w[1]))),-S[2])),d(c(d(c(l(j,J),T[1]),d(c(l(Z,O),-S[1]),c(l(At,F),w[1]))),A[2]),c(d(c(l(Pt,$),T[1]),d(c(l(ht,B),-S[1]),c(l(At,F),A[1]))),-w[2]))),d(d(c(d(c(l(j,J),v[1]),d(c(l(et,ft),-S[1]),c(l(Tt,nt),w[1]))),T[2]),c(d(c(l(j,J),T[1]),d(c(l(Z,O),-S[1]),c(l(At,F),w[1]))),-v[2])),d(c(d(c(l(et,ft),T[1]),d(c(l(Z,O),-v[1]),c(l(K,N),w[1]))),S[2]),c(d(c(l(Tt,nt),T[1]),d(c(l(At,F),-v[1]),c(l(K,N),S[1]))),-w[2])))),lt=l(I,xt);return lt[lt.length-1]}return R}function M(d,l,y,c){function R(T,v,S,A,w,C){var N=d(d(y(T[0],T[0]),y(T[1],T[1])),d(y(T[2],T[2]),y(T[3],T[3]))),F=c(N,v[0]),B=c(N,S[0]),O=c(N,A[0]),H=c(N,w[0]),K=c(N,C[0]),nt=d(d(y(v[0],v[0]),y(v[1],v[1])),d(y(v[2],v[2]),y(v[3],v[3]))),tt=c(nt,T[0]),ft=c(nt,S[0]),dt=c(nt,A[0]),At=c(nt,w[0]),Tt=c(nt,C[0]),$=d(d(y(S[0],S[0]),y(S[1],S[1])),d(y(S[2],S[2]),y(S[3],S[3]))),J=c($,T[0]),ot=c($,v[0]),ht=c($,A[0]),at=c($,w[0]),Pt=c($,C[0]),Gt=d(d(y(A[0],A[0]),y(A[1],A[1])),d(y(A[2],A[2]),y(A[3],A[3]))),wt=c(Gt,T[0]),Z=c(Gt,v[0]),et=c(Gt,S[0]),j=c(Gt,w[0]),st=c(Gt,C[0]),I=d(d(y(w[0],w[0]),y(w[1],w[1])),d(y(w[2],w[2]),y(w[3],w[3]))),xt=c(I,T[0]),lt=c(I,v[0]),Mt=c(I,S[0]),it=c(I,A[0]),L=c(I,C[0]),P=d(d(y(C[0],C[0]),y(C[1],C[1])),d(y(C[2],C[2]),y(C[3],C[3]))),z=c(P,T[0]),W=c(P,v[0]),Q=c(P,S[0]),X=c(P,A[0]),gt=c(P,w[0]),_t=d(d(d(c(d(d(c(d(c(l(gt,L),A[1]),d(c(l(X,st),-w[1]),c(l(it,j),C[1]))),S[2]),c(d(c(l(gt,L),S[1]),d(c(l(Q,Pt),-w[1]),c(l(Mt,at),C[1]))),-A[2])),d(c(d(c(l(X,st),S[1]),d(c(l(Q,Pt),-A[1]),c(l(et,ht),C[1]))),w[2]),c(d(c(l(it,j),S[1]),d(c(l(Mt,at),-A[1]),c(l(et,ht),w[1]))),-C[2]))),v[3]),d(c(d(d(c(d(c(l(gt,L),A[1]),d(c(l(X,st),-w[1]),c(l(it,j),C[1]))),v[2]),c(d(c(l(gt,L),v[1]),d(c(l(W,Tt),-w[1]),c(l(lt,At),C[1]))),-A[2])),d(c(d(c(l(X,st),v[1]),d(c(l(W,Tt),-A[1]),c(l(Z,dt),C[1]))),w[2]),c(d(c(l(it,j),v[1]),d(c(l(lt,At),-A[1]),c(l(Z,dt),w[1]))),-C[2]))),-S[3]),c(d(d(c(d(c(l(gt,L),S[1]),d(c(l(Q,Pt),-w[1]),c(l(Mt,at),C[1]))),v[2]),c(d(c(l(gt,L),v[1]),d(c(l(W,Tt),-w[1]),c(l(lt,At),C[1]))),-S[2])),d(c(d(c(l(Q,Pt),v[1]),d(c(l(W,Tt),-S[1]),c(l(ot,ft),C[1]))),w[2]),c(d(c(l(Mt,at),v[1]),d(c(l(lt,At),-S[1]),c(l(ot,ft),w[1]))),-C[2]))),A[3]))),d(d(c(d(d(c(d(c(l(X,st),S[1]),d(c(l(Q,Pt),-A[1]),c(l(et,ht),C[1]))),v[2]),c(d(c(l(X,st),v[1]),d(c(l(W,Tt),-A[1]),c(l(Z,dt),C[1]))),-S[2])),d(c(d(c(l(Q,Pt),v[1]),d(c(l(W,Tt),-S[1]),c(l(ot,ft),C[1]))),A[2]),c(d(c(l(et,ht),v[1]),d(c(l(Z,dt),-S[1]),c(l(ot,ft),A[1]))),-C[2]))),-w[3]),c(d(d(c(d(c(l(it,j),S[1]),d(c(l(Mt,at),-A[1]),c(l(et,ht),w[1]))),v[2]),c(d(c(l(it,j),v[1]),d(c(l(lt,At),-A[1]),c(l(Z,dt),w[1]))),-S[2])),d(c(d(c(l(Mt,at),v[1]),d(c(l(lt,At),-S[1]),c(l(ot,ft),w[1]))),A[2]),c(d(c(l(et,ht),v[1]),d(c(l(Z,dt),-S[1]),c(l(ot,ft),A[1]))),-w[2]))),C[3])),d(c(d(d(c(d(c(l(gt,L),A[1]),d(c(l(X,st),-w[1]),c(l(it,j),C[1]))),v[2]),c(d(c(l(gt,L),v[1]),d(c(l(W,Tt),-w[1]),c(l(lt,At),C[1]))),-A[2])),d(c(d(c(l(X,st),v[1]),d(c(l(W,Tt),-A[1]),c(l(Z,dt),C[1]))),w[2]),c(d(c(l(it,j),v[1]),d(c(l(lt,At),-A[1]),c(l(Z,dt),w[1]))),-C[2]))),T[3]),c(d(d(c(d(c(l(gt,L),A[1]),d(c(l(X,st),-w[1]),c(l(it,j),C[1]))),T[2]),c(d(c(l(gt,L),T[1]),d(c(l(z,K),-w[1]),c(l(xt,H),C[1]))),-A[2])),d(c(d(c(l(X,st),T[1]),d(c(l(z,K),-A[1]),c(l(wt,O),C[1]))),w[2]),c(d(c(l(it,j),T[1]),d(c(l(xt,H),-A[1]),c(l(wt,O),w[1]))),-C[2]))),-v[3])))),d(d(d(c(d(d(c(d(c(l(gt,L),v[1]),d(c(l(W,Tt),-w[1]),c(l(lt,At),C[1]))),T[2]),c(d(c(l(gt,L),T[1]),d(c(l(z,K),-w[1]),c(l(xt,H),C[1]))),-v[2])),d(c(d(c(l(W,Tt),T[1]),d(c(l(z,K),-v[1]),c(l(tt,F),C[1]))),w[2]),c(d(c(l(lt,At),T[1]),d(c(l(xt,H),-v[1]),c(l(tt,F),w[1]))),-C[2]))),A[3]),c(d(d(c(d(c(l(X,st),v[1]),d(c(l(W,Tt),-A[1]),c(l(Z,dt),C[1]))),T[2]),c(d(c(l(X,st),T[1]),d(c(l(z,K),-A[1]),c(l(wt,O),C[1]))),-v[2])),d(c(d(c(l(W,Tt),T[1]),d(c(l(z,K),-v[1]),c(l(tt,F),C[1]))),A[2]),c(d(c(l(Z,dt),T[1]),d(c(l(wt,O),-v[1]),c(l(tt,F),A[1]))),-C[2]))),-w[3])),d(c(d(d(c(d(c(l(it,j),v[1]),d(c(l(lt,At),-A[1]),c(l(Z,dt),w[1]))),T[2]),c(d(c(l(it,j),T[1]),d(c(l(xt,H),-A[1]),c(l(wt,O),w[1]))),-v[2])),d(c(d(c(l(lt,At),T[1]),d(c(l(xt,H),-v[1]),c(l(tt,F),w[1]))),A[2]),c(d(c(l(Z,dt),T[1]),d(c(l(wt,O),-v[1]),c(l(tt,F),A[1]))),-w[2]))),C[3]),c(d(d(c(d(c(l(X,st),S[1]),d(c(l(Q,Pt),-A[1]),c(l(et,ht),C[1]))),v[2]),c(d(c(l(X,st),v[1]),d(c(l(W,Tt),-A[1]),c(l(Z,dt),C[1]))),-S[2])),d(c(d(c(l(Q,Pt),v[1]),d(c(l(W,Tt),-S[1]),c(l(ot,ft),C[1]))),A[2]),c(d(c(l(et,ht),v[1]),d(c(l(Z,dt),-S[1]),c(l(ot,ft),A[1]))),-C[2]))),T[3]))),d(d(c(d(d(c(d(c(l(X,st),S[1]),d(c(l(Q,Pt),-A[1]),c(l(et,ht),C[1]))),T[2]),c(d(c(l(X,st),T[1]),d(c(l(z,K),-A[1]),c(l(wt,O),C[1]))),-S[2])),d(c(d(c(l(Q,Pt),T[1]),d(c(l(z,K),-S[1]),c(l(J,B),C[1]))),A[2]),c(d(c(l(et,ht),T[1]),d(c(l(wt,O),-S[1]),c(l(J,B),A[1]))),-C[2]))),-v[3]),c(d(d(c(d(c(l(X,st),v[1]),d(c(l(W,Tt),-A[1]),c(l(Z,dt),C[1]))),T[2]),c(d(c(l(X,st),T[1]),d(c(l(z,K),-A[1]),c(l(wt,O),C[1]))),-v[2])),d(c(d(c(l(W,Tt),T[1]),d(c(l(z,K),-v[1]),c(l(tt,F),C[1]))),A[2]),c(d(c(l(Z,dt),T[1]),d(c(l(wt,O),-v[1]),c(l(tt,F),A[1]))),-C[2]))),S[3])),d(c(d(d(c(d(c(l(Q,Pt),v[1]),d(c(l(W,Tt),-S[1]),c(l(ot,ft),C[1]))),T[2]),c(d(c(l(Q,Pt),T[1]),d(c(l(z,K),-S[1]),c(l(J,B),C[1]))),-v[2])),d(c(d(c(l(W,Tt),T[1]),d(c(l(z,K),-v[1]),c(l(tt,F),C[1]))),S[2]),c(d(c(l(ot,ft),T[1]),d(c(l(J,B),-v[1]),c(l(tt,F),S[1]))),-C[2]))),-A[3]),c(d(d(c(d(c(l(et,ht),v[1]),d(c(l(Z,dt),-S[1]),c(l(ot,ft),A[1]))),T[2]),c(d(c(l(et,ht),T[1]),d(c(l(wt,O),-S[1]),c(l(J,B),A[1]))),-v[2])),d(c(d(c(l(Z,dt),T[1]),d(c(l(wt,O),-v[1]),c(l(tt,F),A[1]))),S[2]),c(d(c(l(ot,ft),T[1]),d(c(l(J,B),-v[1]),c(l(tt,F),S[1]))),-A[2]))),C[3]))))),It=d(d(d(c(d(d(c(d(c(l(gt,L),A[1]),d(c(l(X,st),-w[1]),c(l(it,j),C[1]))),S[2]),c(d(c(l(gt,L),S[1]),d(c(l(Q,Pt),-w[1]),c(l(Mt,at),C[1]))),-A[2])),d(c(d(c(l(X,st),S[1]),d(c(l(Q,Pt),-A[1]),c(l(et,ht),C[1]))),w[2]),c(d(c(l(it,j),S[1]),d(c(l(Mt,at),-A[1]),c(l(et,ht),w[1]))),-C[2]))),T[3]),d(c(d(d(c(d(c(l(gt,L),A[1]),d(c(l(X,st),-w[1]),c(l(it,j),C[1]))),T[2]),c(d(c(l(gt,L),T[1]),d(c(l(z,K),-w[1]),c(l(xt,H),C[1]))),-A[2])),d(c(d(c(l(X,st),T[1]),d(c(l(z,K),-A[1]),c(l(wt,O),C[1]))),w[2]),c(d(c(l(it,j),T[1]),d(c(l(xt,H),-A[1]),c(l(wt,O),w[1]))),-C[2]))),-S[3]),c(d(d(c(d(c(l(gt,L),S[1]),d(c(l(Q,Pt),-w[1]),c(l(Mt,at),C[1]))),T[2]),c(d(c(l(gt,L),T[1]),d(c(l(z,K),-w[1]),c(l(xt,H),C[1]))),-S[2])),d(c(d(c(l(Q,Pt),T[1]),d(c(l(z,K),-S[1]),c(l(J,B),C[1]))),w[2]),c(d(c(l(Mt,at),T[1]),d(c(l(xt,H),-S[1]),c(l(J,B),w[1]))),-C[2]))),A[3]))),d(d(c(d(d(c(d(c(l(X,st),S[1]),d(c(l(Q,Pt),-A[1]),c(l(et,ht),C[1]))),T[2]),c(d(c(l(X,st),T[1]),d(c(l(z,K),-A[1]),c(l(wt,O),C[1]))),-S[2])),d(c(d(c(l(Q,Pt),T[1]),d(c(l(z,K),-S[1]),c(l(J,B),C[1]))),A[2]),c(d(c(l(et,ht),T[1]),d(c(l(wt,O),-S[1]),c(l(J,B),A[1]))),-C[2]))),-w[3]),c(d(d(c(d(c(l(it,j),S[1]),d(c(l(Mt,at),-A[1]),c(l(et,ht),w[1]))),T[2]),c(d(c(l(it,j),T[1]),d(c(l(xt,H),-A[1]),c(l(wt,O),w[1]))),-S[2])),d(c(d(c(l(Mt,at),T[1]),d(c(l(xt,H),-S[1]),c(l(J,B),w[1]))),A[2]),c(d(c(l(et,ht),T[1]),d(c(l(wt,O),-S[1]),c(l(J,B),A[1]))),-w[2]))),C[3])),d(c(d(d(c(d(c(l(gt,L),S[1]),d(c(l(Q,Pt),-w[1]),c(l(Mt,at),C[1]))),v[2]),c(d(c(l(gt,L),v[1]),d(c(l(W,Tt),-w[1]),c(l(lt,At),C[1]))),-S[2])),d(c(d(c(l(Q,Pt),v[1]),d(c(l(W,Tt),-S[1]),c(l(ot,ft),C[1]))),w[2]),c(d(c(l(Mt,at),v[1]),d(c(l(lt,At),-S[1]),c(l(ot,ft),w[1]))),-C[2]))),T[3]),c(d(d(c(d(c(l(gt,L),S[1]),d(c(l(Q,Pt),-w[1]),c(l(Mt,at),C[1]))),T[2]),c(d(c(l(gt,L),T[1]),d(c(l(z,K),-w[1]),c(l(xt,H),C[1]))),-S[2])),d(c(d(c(l(Q,Pt),T[1]),d(c(l(z,K),-S[1]),c(l(J,B),C[1]))),w[2]),c(d(c(l(Mt,at),T[1]),d(c(l(xt,H),-S[1]),c(l(J,B),w[1]))),-C[2]))),-v[3])))),d(d(d(c(d(d(c(d(c(l(gt,L),v[1]),d(c(l(W,Tt),-w[1]),c(l(lt,At),C[1]))),T[2]),c(d(c(l(gt,L),T[1]),d(c(l(z,K),-w[1]),c(l(xt,H),C[1]))),-v[2])),d(c(d(c(l(W,Tt),T[1]),d(c(l(z,K),-v[1]),c(l(tt,F),C[1]))),w[2]),c(d(c(l(lt,At),T[1]),d(c(l(xt,H),-v[1]),c(l(tt,F),w[1]))),-C[2]))),S[3]),c(d(d(c(d(c(l(Q,Pt),v[1]),d(c(l(W,Tt),-S[1]),c(l(ot,ft),C[1]))),T[2]),c(d(c(l(Q,Pt),T[1]),d(c(l(z,K),-S[1]),c(l(J,B),C[1]))),-v[2])),d(c(d(c(l(W,Tt),T[1]),d(c(l(z,K),-v[1]),c(l(tt,F),C[1]))),S[2]),c(d(c(l(ot,ft),T[1]),d(c(l(J,B),-v[1]),c(l(tt,F),S[1]))),-C[2]))),-w[3])),d(c(d(d(c(d(c(l(Mt,at),v[1]),d(c(l(lt,At),-S[1]),c(l(ot,ft),w[1]))),T[2]),c(d(c(l(Mt,at),T[1]),d(c(l(xt,H),-S[1]),c(l(J,B),w[1]))),-v[2])),d(c(d(c(l(lt,At),T[1]),d(c(l(xt,H),-v[1]),c(l(tt,F),w[1]))),S[2]),c(d(c(l(ot,ft),T[1]),d(c(l(J,B),-v[1]),c(l(tt,F),S[1]))),-w[2]))),C[3]),c(d(d(c(d(c(l(it,j),S[1]),d(c(l(Mt,at),-A[1]),c(l(et,ht),w[1]))),v[2]),c(d(c(l(it,j),v[1]),d(c(l(lt,At),-A[1]),c(l(Z,dt),w[1]))),-S[2])),d(c(d(c(l(Mt,at),v[1]),d(c(l(lt,At),-S[1]),c(l(ot,ft),w[1]))),A[2]),c(d(c(l(et,ht),v[1]),d(c(l(Z,dt),-S[1]),c(l(ot,ft),A[1]))),-w[2]))),T[3]))),d(d(c(d(d(c(d(c(l(it,j),S[1]),d(c(l(Mt,at),-A[1]),c(l(et,ht),w[1]))),T[2]),c(d(c(l(it,j),T[1]),d(c(l(xt,H),-A[1]),c(l(wt,O),w[1]))),-S[2])),d(c(d(c(l(Mt,at),T[1]),d(c(l(xt,H),-S[1]),c(l(J,B),w[1]))),A[2]),c(d(c(l(et,ht),T[1]),d(c(l(wt,O),-S[1]),c(l(J,B),A[1]))),-w[2]))),-v[3]),c(d(d(c(d(c(l(it,j),v[1]),d(c(l(lt,At),-A[1]),c(l(Z,dt),w[1]))),T[2]),c(d(c(l(it,j),T[1]),d(c(l(xt,H),-A[1]),c(l(wt,O),w[1]))),-v[2])),d(c(d(c(l(lt,At),T[1]),d(c(l(xt,H),-v[1]),c(l(tt,F),w[1]))),A[2]),c(d(c(l(Z,dt),T[1]),d(c(l(wt,O),-v[1]),c(l(tt,F),A[1]))),-w[2]))),S[3])),d(c(d(d(c(d(c(l(Mt,at),v[1]),d(c(l(lt,At),-S[1]),c(l(ot,ft),w[1]))),T[2]),c(d(c(l(Mt,at),T[1]),d(c(l(xt,H),-S[1]),c(l(J,B),w[1]))),-v[2])),d(c(d(c(l(lt,At),T[1]),d(c(l(xt,H),-v[1]),c(l(tt,F),w[1]))),S[2]),c(d(c(l(ot,ft),T[1]),d(c(l(J,B),-v[1]),c(l(tt,F),S[1]))),-w[2]))),-A[3]),c(d(d(c(d(c(l(et,ht),v[1]),d(c(l(Z,dt),-S[1]),c(l(ot,ft),A[1]))),T[2]),c(d(c(l(et,ht),T[1]),d(c(l(wt,O),-S[1]),c(l(J,B),A[1]))),-v[2])),d(c(d(c(l(Z,dt),T[1]),d(c(l(wt,O),-v[1]),c(l(tt,F),A[1]))),S[2]),c(d(c(l(ot,ft),T[1]),d(c(l(J,B),-v[1]),c(l(tt,F),S[1]))),-A[2]))),w[3]))))),Bt=l(_t,It);return Bt[Bt.length-1]}return R}var b=[h,u,f];function x(d){var l=b[d.length];return l||(l=b[d.length]=a(d.length)),l.apply(void 0,d)}function _(d,l,y,c,R,T,v,S){function A(w,C,N,F,B,O){switch(arguments.length){case 0:case 1:return 0;case 2:return c(w,C);case 3:return R(w,C,N);case 4:return T(w,C,N,F);case 5:return v(w,C,N,F,B);case 6:return S(w,C,N,F,B,O)}for(var H=new Array(arguments.length),K=0;K<arguments.length;++K)H[K]=arguments[K];return d(H)}return A}function E(){for(;b.length<=o;)b.push(a(b.length));t.exports=_.apply(void 0,[x].concat(b));for(var d=0;d<=o;++d)t.exports[d]=b[d]}E()}}),jy=rn({"node_modules/cdt2d/lib/delaunay.js"(i,t){var e=Jy()[4];$o(),t.exports=r;function n(s,o,a,h,u,f){var p=o.opposite(h,u);if(!(p<0)){if(u<h){var g=h;h=u,u=g,g=f,f=p,p=g}o.isConstraint(h,u)||e(s[h],s[u],s[f],s[p])<0&&a.push(h,u)}}function r(s,o){for(var a=[],h=s.length,u=o.stars,f=0;f<h;++f)for(var p=u[f],g=1;g<p.length;g+=2){var m=p[g];if(!(m<f)&&!o.isConstraint(f,m)){for(var M=p[g-1],b=-1,x=1;x<p.length;x+=2)if(p[x-1]===m){b=p[x];break}b<0||e(s[f],s[m],s[M],s[b])<0&&a.push(f,m)}}for(;a.length>0;){for(var m=a.pop(),f=a.pop(),M=-1,b=-1,p=u[f],_=1;_<p.length;_+=2){var E=p[_-1],d=p[_];E===m?b=d:d===m&&(M=E)}M<0||b<0||e(s[f],s[m],s[M],s[b])>=0||(o.flip(f,m),n(s,o,a,M,f,b),n(s,o,a,f,b,M),n(s,o,a,b,m,M),n(s,o,a,m,M,b))}}}}),Qy=rn({"node_modules/cdt2d/lib/filter.js"(i,t){var e=$o();t.exports=h;function n(u,f,p,g,m,M,b){this.cells=u,this.neighbor=f,this.flags=g,this.constraint=p,this.active=m,this.next=M,this.boundary=b}var r=n.prototype;function s(u,f){return u[0]-f[0]||u[1]-f[1]||u[2]-f[2]}r.locate=(function(){var u=[0,0,0];return function(f,p,g){var m=f,M=p,b=g;return p<g?p<f&&(m=p,M=g,b=f):g<f&&(m=g,M=f,b=p),m<0?-1:(u[0]=m,u[1]=M,u[2]=b,e.eq(this.cells,u,s))}})();function o(u,f){for(var p=u.cells(),g=p.length,m=0;m<g;++m){var M=p[m],b=M[0],x=M[1],_=M[2];x<_?x<b&&(M[0]=x,M[1]=_,M[2]=b):_<b&&(M[0]=_,M[1]=b,M[2]=x)}p.sort(s);for(var E=new Array(g),m=0;m<E.length;++m)E[m]=0;var d=[],l=[],y=new Array(3*g),c=new Array(3*g),R=null;f&&(R=[]);for(var T=new n(p,y,c,E,d,l,R),m=0;m<g;++m)for(var M=p[m],v=0;v<3;++v){var b=M[v],x=M[(v+1)%3],S=y[3*m+v]=T.locate(x,b,u.opposite(x,b)),A=c[3*m+v]=u.isConstraint(b,x);S<0&&(A?l.push(m):(d.push(m),E[m]=1),f&&R.push([x,b,-1]))}return T}function a(u,f,p){for(var g=0,m=0;m<u.length;++m)f[m]===p&&(u[g++]=u[m]);return u.length=g,u}function h(u,f,p){var g=o(u,p);if(f===0)return p?g.cells.concat(g.boundary):g.cells;for(var m=1,M=g.active,b=g.next,x=g.flags,_=g.cells,E=g.constraint,d=g.neighbor;M.length>0||b.length>0;){for(;M.length>0;){var l=M.pop();if(x[l]!==-m){x[l]=m,_[l];for(var y=0;y<3;++y){var c=d[3*l+y];c>=0&&x[c]===0&&(E[3*l+y]?b.push(c):(M.push(c),x[c]=m))}}}var R=b;b=M,M=R,b.length=0,m=-m}var T=a(_,x,f);return p?T.concat(g.boundary):T}}}),tS=rn({"node_modules/cdt2d/cdt2d.js"(i,t){var e=Zy(),n=Ky(),r=jy(),s=Qy();t.exports=f;function o(p){return[Math.min(p[0],p[1]),Math.max(p[0],p[1])]}function a(p,g){return p[0]-g[0]||p[1]-g[1]}function h(p){return p.map(o).sort(a)}function u(p,g,m){return g in p?p[g]:m}function f(p,g,m){Array.isArray(g)?(m=m||{},g=g||[]):(m=g||{},g=[]);var M=!!u(m,"delaunay",!0),b=!!u(m,"interior",!0),x=!!u(m,"exterior",!0),_=!!u(m,"infinity",!1);if(!b&&!x||p.length===0)return[];var E=e(p,g);if(M||b!==x||_){for(var d=n(p.length,h(g)),l=0;l<E.length;++l){var y=E[l];d.addTriangle(y[0],y[1],y[2])}return M&&r(p,d),x?b?_?s(d,0,_):d.cells():s(d,1,_):s(d,-1)}else return E}}});const eS=tS();class Gi{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}const yu=1e-16,nS=1e-16,Bi=new U,Su=new U,Mu=new Gi(()=>({param:0,index:0})),iS=new Gi(()=>new U);function rS(i,t,e,n){Mu.clear(),t.length=0,e.length=0;for(let u=0,f=i.length;u<f;u++){const p=i[u];h(p.start),h(p.end)}for(let u=0,f=i.length;u<f;u++){const p=i[u];for(let g=u+1;g<f;g++){const m=i[g];p.distanceSqToLine3(m,Bi,Su)<yu*n&&h(Su)}}const r=[];for(let u=0,f=i.length;u<f;u++){r.length=0;const p=i[u];for(let g=0,m=t.length;g<m;g++){const M=t[g],b=p.closestPointToPointParameter(M,!0);if(p.at(b,Bi),M.distanceToSquared(Bi)<yu*n){const x=Mu.getInstance();x.param=b,x.index=g,r.push(x)}}r.sort(a);for(let g=0,m=r.length-1;g<m;g++){const M=r[g].index,b=r[g+1].index;M!==b&&e.push([M,b])}}const s=new Set;let o=0;for(let u=0,f=e.length;u<f;u++){const p=e[u],g=Math.min(p[0],p[1]),m=Math.max(p[0],p[1]),M=g+","+m;s.has(M)||(s.add(M),e[o++]=p)}e.length=o;function a(u,f){return u.param-f.param}function h(u){for(let f=0;f<t.length;f++){const p=t[f];if(u===p||u.distanceToSquared(p)<nS*n)return f}return t.push(iS.getInstance().copy(u)),t.length-1}}class bu{constructor(){this.trianglePool=new Gi(()=>new Ke),this.linePool=new Gi(()=>new we),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new U,this.projOrigin=new U,this.projU=new U,this.projV=new U,this.baseTri=new Ke,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();const{normal:s,baseTri:o,projU:a,projV:h,projOrigin:u,constrainedEdges:f,linePool:p,baseIndices:g}=this;t.getNormal(s),o.copy(t),o.update(),g[0]=e,g[1]=n,g[2]=r,f.length=0;const m=p.getInstance();m.start.copy(o.a),m.end.copy(o.b);const M=p.getInstance();M.start.copy(o.b),M.end.copy(o.c);const b=p.getInstance();b.start.copy(o.c),b.end.copy(o.a),f.push(m,M,b),u.copy(o.a),a.subVectors(o.b,o.a).normalize(),h.crossVectors(s,a).normalize()}addConstraintEdge(t){const{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){const{projOrigin:n,projU:r,projV:s}=this;return Bi.subVectors(t,n),e.set(Bi.dot(r),Bi.dot(s),0)}_from2D(t,e,n){const{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){const{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:h}=this;t.length=0,e.clear();const u=[];for(let _=0,E=a.length;_<E;_++){const d=a[_],l=s.getInstance();this._to2D(d.start,l.start),this._to2D(d.end,l.end),u.push(l)}let f=0;for(let _=0;_<3;_++){const E=this._to2D(o.points[_],Bi);f=Math.max(f,Math.abs(E.x),Math.abs(E.y))}const p=[],g=[];rS(u,p,g,f);const m=[];for(let _=0,E=p.length;_<E;_++){const d=p[_];m.push([d.x,d.y])}const M=eS(m,g,{exterior:!1}),b=new Map;for(let _=0,E=g.length;_<E;_++){const d=g[_];b.set(`${d[0]}_${d[1]}`,-1),b.set(`${d[1]}_${d[0]}`,-1)}const x=`${h[0]}_${h[1]}_${h[2]}_`;for(let _=0,E=M.length;_<E;_++){const d=M[_],[l,y,c]=d,R=e.getInstance();this._from2D(m[l][0],m[l][1],R.a),this._from2D(m[y][0],m[y][1],R.b),this._from2D(m[c][0],m[c][1],R.c),t.push(R);const T=[];n.push(T);const v=[];r.push(v);for(let S=0;S<3;S++){const A=d[S];v.push(A<3?h[A]:x+A);const w=d[(S+1)%3],C=`${A}_${w}`;if(b.has(C)){const N=b.get(C);N!==-1&&(T.push(N),n[N].push(_))}else{const N=`${w}_${A}`;b.set(N,_)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}}const sS=1e-14,Za=new U,Eu=new U,Au=new U;function gi(i,t=sS){Za.subVectors(i.b,i.a),Eu.subVectors(i.c,i.a),Au.subVectors(i.b,i.c);const e=Za.angleTo(Eu),n=Za.angleTo(Au),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const Ka=1e-10,Qr=1e-10,$n=new we,me=new we,Yn=new U,Tu=new U,wu=new U,fo=new hn,Ja=new Ke;class Cu{constructor(){this.trianglePool=new Gi(()=>new he),this.triangles=[],this.normal=new U}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){const a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(Yn).dot(r))>Ka)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const h=n.getInstance();h.copy(a),e.push(h)}else{t.getNormal(r);const s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){const{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){const a=n[s];a.coplanarCount=0}const r=[t.a,t.b,t.c];for(let s=0;s<3;s++){const o=(s+1)%3,a=r[s],h=r[o];t.getNormal(Tu).normalize(),Yn.subVectors(h,a).normalize(),wu.crossVectors(Tu,Yn),fo.setFromNormalAndCoplanarPoint(wu,a),this.splitByPlane(fo,t)}}else t.getPlane(fo),this.splitByPlane(fo,t)}splitByPlane(t,e){const{triangles:n,trianglePool:r}=this;Ja.copy(e),Ja.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){const a=n[s];if(!Ja.intersectsTriangle(a,$n,!0))continue;const{a:h,b:u,c:f}=a;let p=0,g=-1,m=!1,M=[],b=[];const x=[h,u,f];for(let _=0;_<3;_++){const E=(_+1)%3;$n.start.copy(x[_]),$n.end.copy(x[E]);const d=t.distanceToPoint($n.start),l=t.distanceToPoint($n.end);if(Math.abs(d)<Qr&&Math.abs(l)<Qr){m=!0;break}if(d>0?M.push(_):b.push(_),Math.abs(d)<Qr)continue;let y=!!t.intersectLine($n,Yn);!y&&Math.abs(l)<Qr&&(Yn.copy($n.end),y=!0),y&&!(Yn.distanceTo($n.start)<Ka)&&(Yn.distanceTo($n.end)<Ka&&(g=_),p===0?me.start.copy(Yn):me.end.copy(Yn),p++)}if(!m&&p===2&&me.distance()>Qr)if(g!==-1){g=(g+1)%3;let _=0;_===g&&(_=(_+1)%3);let E=_+1;E===g&&(E=(E+1)%3);const d=r.getInstance();d.a.copy(x[E]),d.b.copy(me.end),d.c.copy(me.start),gi(d)||n.push(d),a.a.copy(x[_]),a.b.copy(me.start),a.c.copy(me.end),gi(a)&&(n.splice(s,1),s--,o--)}else{const _=M.length>=2?b[0]:M[0];if(_===0){let c=me.start;me.start=me.end,me.end=c}const E=(_+1)%3,d=(_+2)%3,l=r.getInstance(),y=r.getInstance();x[E].distanceToSquared(me.start)<x[d].distanceToSquared(me.end)?(l.a.copy(x[E]),l.b.copy(me.start),l.c.copy(me.end),y.a.copy(x[E]),y.b.copy(x[d]),y.c.copy(me.start)):(l.a.copy(x[d]),l.b.copy(me.start),l.c.copy(me.end),y.a.copy(x[E]),y.b.copy(x[d]),y.c.copy(me.end)),a.a.copy(x[_]),a.b.copy(me.end),a.c.copy(me.start),gi(l)||n.push(l),gi(y)||n.push(y),gi(a)&&(n.splice(s,1),s--,o--)}else p===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}}class Ru{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){const{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){const{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}}const oS=0,Jf=1,aS=2,lS=3,cS=4,jf=5,Qf=6,ja=1e-10,hS=1e-15,uS=1e-10,fS=1e-10,Pu=new we,xr=new we,Du=new U,Lu=new U,Iu=new U,Qa=new hn,Ar=new U,Oo=new U;function dS(i,t){i.getNormal(Ar),t.getNormal(Oo);const e=Ar.dot(Oo);if(Math.abs(1-Math.abs(e))>=uS)return!1;const n=Ar.dot(i.a),r=Ar.dot(t.a);return Math.abs(n-r)<fS}function Uu(i,t,e,n){let r=0,s=1;i.delta(Du);const o=[t.a,t.b,t.c];for(let a=0;a<3;a++){const h=o[a],u=o[(a+1)%3];Lu.subVectors(u,h),Iu.crossVectors(e,Lu),Qa.setFromNormalAndCoplanarPoint(Iu,h);const f=Qa.distanceToPoint(i.start),p=Qa.normal.dot(Du);if(Math.abs(p)<hS){if(f<-ja)return null;continue}const g=-f/p;if(p>0?r=Math.max(r,g):s=Math.min(s,g),r>s+ja)return null}return s-r<ja?null:(i.at(r,n.start),i.at(s,n.end),n)}function Nu(i,t,e){let n=0;i.getNormal(Ar),t.getNormal(Oo);const r=[t.a,t.b,t.c];for(let o=0;o<3;o++){xr.start.copy(r[o]),xr.end.copy(r[(o+1)%3]);const a=Uu(xr,i,Ar,Pu);a!==null&&(n>=e.length&&e.push(new we),e[n].copy(a),n++)}const s=[i.a,i.b,i.c];for(let o=0;o<3;o++){xr.start.copy(s[o]),xr.end.copy(s[(o+1)%3]);const a=Uu(xr,t,Oo,Pu);a!==null&&(n>=e.length&&e.push(new we),e[n].copy(a),n++)}return n}const vr=new xs,Fu=new Kt,po=new we,tl=[],go=new Gi(()=>new we),yr=-1,Sr=1,Co=-2,Ro=2,os=0,Di=1,Nc=2;let Po=null;function Ou(i){Po=i}function td(i,t,e=null){i.getMidpoint(vr.origin),i.getNormal(vr.direction),e&&(vr.origin.applyMatrix4(e),vr.direction.transformDirection(e));const n=t.raycastFirst(vr,yn);return!!(n&&vr.direction.dot(n.face.normal)>0)?yr:Sr}function pS(i,t){const e=new Ru,n=new Ru;return go.clear(),Fu.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Fu,{intersectsTriangles(r,s,o,a){if(!gi(r)&&!gi(s)){const u=(dS(r,s)?Nu(r,s,tl):0)>2;if(u||r.intersectsTriangle(s,po,!0)){const p=i.geometry.boundsTree.resolveTriangleIndex(o),g=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(p,g,u),n.add(g,p,u),u){const m=Nu(r,s,tl);for(let M=0;M<m;M++){const b=go.getInstance().copy(tl[M]);e.addIntersectionEdge(p,b),n.addIntersectionEdge(g,b)}}else{const m=go.getInstance().copy(po),M=go.getInstance().copy(po);e.addIntersectionEdge(p,m),n.addIntersectionEdge(g,M)}Po&&(Po.addEdge(po),Po.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function ed(i,t,e=!1){switch(i){case oS:if(t===Sr||t===Ro&&!e)return Di;break;case Jf:if(e){if(t===yr)return os}else if(t===Sr||t===Co)return Di;break;case aS:if(e){if(t===Sr||t===Co)return Di}else if(t===yr)return os;break;case cS:if(t===yr)return os;if(t===Sr)return Di;break;case lS:if(t===yr||t===Ro&&!e)return Di;break;case jf:if(!e&&(t===Sr||t===Co))return Di;break;case Qf:if(!e&&(t===yr||t===Ro))return Di;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return Nc}class gS{constructor(t){this.triangle=new he().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new he().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class Bu{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){const{data:s}=this;s[t]||(s[t]=new gS(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{const h=n[a].intersects;for(const u in h)r.has(u)||(r.add(u),s.push(h[u]))}};if(t!==null)o(t);else for(const a in n)o(a);return s}reset(){this.data={}}}class mS{constructor(){this.enabled=!1,this.triangleIntersectsA=new Bu,this.triangleIntersectsB=new Bu,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){const{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Ou(this))}complete(){this.enabled&&Ou(null)}}const en=new Kt,Li=new Kt,Ye=new Kt,di=new qt,_n=new he,Ii=new he,xn=new he,ui=new he,zi=[],Rn=[],mo=new Set,zu=new U,Vu=new U,ku=new Gi(()=>new he),Hu=new U,_o=[];function _S(i,t,e,n,r,s={}){const{useGroups:o=!0}=s,{aIntersections:a,bIntersections:h}=pS(i,t),u=[];let f=null,p;return p=o?0:-1,Wu(i,t,a,e,!1,r,p),Gu(i,t,a,e,!1,n,r,p),e.findIndex(m=>m!==Qf&&m!==jf)!==-1&&(r.forEach(m=>m.clearIndexMap()),p=o?i.geometry.groups.length||1:-1,Wu(t,i,h,e,!0,r,p),Gu(t,i,h,e,!0,n,r,p)),r.forEach(m=>m.clearIndexMap()),zi.length=0,{groups:u,materials:f}}function Gu(i,t,e,n,r,s,o,a=0){en.copy(t.matrixWorld).invert().multiply(i.matrixWorld),Li.copy(en).invert(),r?Ye.copy(en):Ye.identity();const h=Ye.determinant()<0;di.getNormalMatrix(Ye).multiplyScalar(h?-1:1);const u=i.geometry.groupIndices,f=i.geometry.index,p=i.geometry.attributes.position,g=t.geometry.boundsTree,m=t.geometry.index,M=t.geometry.attributes.position,b=e.ids;for(let x=0,_=b.length;x<_;x++){const E=b[x],d=a===-1?0:u[E]+a,l=3*E;let y=l+0,c=l+1,R=l+2;f&&(y=f.getX(y),c=f.getX(c),R=f.getX(R)),_n.a.fromBufferAttribute(p,y),_n.b.fromBufferAttribute(p,c),_n.c.fromBufferAttribute(p,R),r&&(_n.a.applyMatrix4(en),_n.b.applyMatrix4(en),_n.c.applyMatrix4(en)),s.reset(),s.initialize(_n,y,c,R),_o.length=0,ku.clear(),_n.getNormal(Vu);const T=e.coplanarSet.get(E);if(T)for(const w of T){const C=3*w;let N=C+0,F=C+1,B=C+2;m&&(N=m.getX(N),F=m.getX(F),B=m.getX(B));const O=ku.getInstance();O.a.fromBufferAttribute(M,N),O.b.fromBufferAttribute(M,F),O.c.fromBufferAttribute(M,B),r||(O.a.applyMatrix4(Li),O.b.applyMatrix4(Li),O.c.applyMatrix4(Li)),_o.push(O)}if(s.addConstraintEdge){const w=e.getIntersectionEdges(E);if(w)for(const C of w)s.addConstraintEdge(C);s.triangulate()}else{const C=e.intersectionSet.get(E);for(let N=0,F=C.length;N<F;N++){const B=C[N],O=T&&T.has(B),H=3*B;let K=H+0,nt=H+1,tt=H+2;m&&(K=m.getX(K),nt=m.getX(nt),tt=m.getX(tt)),Ii.a.fromBufferAttribute(M,K),Ii.b.fromBufferAttribute(M,nt),Ii.c.fromBufferAttribute(M,tt),r||(Ii.a.applyMatrix4(Li),Ii.b.applyMatrix4(Li),Ii.c.applyMatrix4(Li)),s.splitByTriangle(Ii,O)}}const{triangles:v,triangleIndices:S=[],triangleConnectivity:A=[]}=s;for(let w=0,C=o.length;w<C;w++)o[w].initInterpolatedAttributeData(i.geometry,Ye,di,y,c,R);mo.clear();for(let w=0,C=v.length;w<C;w++){if(mo.has(w))continue;const N=v[w],F=r?null:en;let B=null;N.getMidpoint(zu);for(let O=0,H=_o.length;O<H;O++){const K=_o[O];if(K.containsPoint(zu)){K.getNormal(Hu),B=Vu.dot(Hu)>0?Ro:Co;break}}B===null&&(B=td(N,g,F)),zi.length=0,Rn.length=0;for(let O=0,H=n.length;O<H;O++){const K=ed(n[O],B,r);K!==Nc&&(zi.push(K),Rn.push(o[O]))}if(Rn.length!==0){const O=[w];for(;O.length>0;){const H=O.pop();if(mo.has(H))continue;mo.add(H);const K=S[H];let nt=null,tt=null,ft=null;K&&(nt=K[0],tt=K[1],ft=K[2]);const dt=v[H];_n.getBarycoord(dt.a,ui.a),_n.getBarycoord(dt.b,ui.b),_n.getBarycoord(dt.c,ui.c);for(let At=0,Tt=Rn.length;At<Tt;At++){const $=Rn[At],ot=zi[At]===os,ht=h!==ot;$.appendInterpolatedAttributeData(d,ui.a,nt,ht),ht?($.appendInterpolatedAttributeData(d,ui.c,ft,ht),$.appendInterpolatedAttributeData(d,ui.b,tt,ht)):($.appendInterpolatedAttributeData(d,ui.b,tt,ht),$.appendInterpolatedAttributeData(d,ui.c,ft,ht))}}}}}return b.length}function Wu(i,t,e,n,r,s,o=0){en.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?Ye.copy(en):Ye.identity();const a=Ye.determinant()<0;di.getNormalMatrix(Ye).multiplyScalar(a?-1:1);const h=t.geometry.boundsTree,u=i.geometry.groupIndices,f=i.geometry.index,g=i.geometry.attributes.position,m=[],M=i.geometry.halfEdges,b=new Set(e.ids),x=Ic(i.geometry);for(let _=0;_<x&&b.size!==x;_++){if(b.has(_))continue;b.add(_),m.push(_);const E=3*_;let d=E+0,l=E+1,y=E+2;f&&(d=f.getX(d),l=f.getX(l),y=f.getX(y)),xn.a.fromBufferAttribute(g,d),xn.b.fromBufferAttribute(g,l),xn.c.fromBufferAttribute(g,y),r&&(xn.a.applyMatrix4(en),xn.b.applyMatrix4(en),xn.c.applyMatrix4(en));const c=td(xn,h,r?null:en);zi.length=0,Rn.length=0;for(let R=0,T=n.length;R<T;R++){const v=ed(n[R],c,r);v!==Nc&&(zi.push(v),Rn.push(s[R]))}for(;m.length>0;){const R=m.pop();for(let T=0;T<3;T++){const v=M.getSiblingTriangleIndex(R,T);v!==-1&&!b.has(v)&&(m.push(v),b.add(v))}if(Rn.length!==0){const T=3*R;let v=T+0,S=T+1,A=T+2;f&&(v=f.getX(v),S=f.getX(S),A=f.getX(A));const w=o===-1?0:u[R]+o;if(xn.a.fromBufferAttribute(g,v),xn.b.fromBufferAttribute(g,S),xn.c.fromBufferAttribute(g,A),!gi(xn))for(let C=0,N=Rn.length;C<N;C++){const F=Rn[C],H=zi[C]===os!==a;F.appendIndexFromGeometry(i.geometry,Ye,di,w,v,H),H?(F.appendIndexFromGeometry(i.geometry,Ye,di,w,A,H),F.appendIndexFromGeometry(i.geometry,Ye,di,w,S,H)):(F.appendIndexFromGeometry(i.geometry,Ye,di,w,S,H),F.appendIndexFromGeometry(i.geometry,Ye,di,w,A,H))}}}}}function xS(i){return i=~~i,i+4-i%4}class vS{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=$f()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(xS(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}}const $e=new U,el=new U,nl=new U,il=new U,xo=new ce,yS=new ce,SS=new ce,MS=new ce;function bS(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function Xu(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}class rl extends vS{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}}class ES{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();const{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){const a=e[s],h=r[a],u=h.array.constructor;n[a]||(n[a]=new rl(u)),n[a].setType(u),n[a].itemSize=h.itemSize,n[a].normalized=h.normalized}for(const s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){const{attributeData:a,interpolatedFields:h}=this,{attributes:u}=t;for(const f in a){const p=u[f];if(!p)throw new Error(`CSG Operations: Attribute ${f} not available on geometry.`);let g,m,M;if(f==="position"?(g=el.fromBufferAttribute(p,r).applyMatrix4(e),m=nl.fromBufferAttribute(p,s).applyMatrix4(e),M=il.fromBufferAttribute(p,o).applyMatrix4(e)):f==="normal"?(g=el.fromBufferAttribute(p,r).applyNormalMatrix(n),m=nl.fromBufferAttribute(p,s).applyNormalMatrix(n),M=il.fromBufferAttribute(p,o).applyNormalMatrix(n)):f==="tangent"?(g=el.fromBufferAttribute(p,r).transformDirection(e),m=nl.fromBufferAttribute(p,s).transformDirection(e),M=il.fromBufferAttribute(p,o).transformDirection(e)):(g=yS.fromBufferAttribute(p,r),m=SS.fromBufferAttribute(p,s),M=MS.fromBufferAttribute(p,o)),!h[f])h[f]=[g.clone(),m.clone(),M.clone()];else{const b=h[f];b[0].copy(g),b[1].copy(m),b[2].copy(M)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){const{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:h,invertedIndexMap:u}=this;for(;s.length<=t;)s.push(new rl(Uint32Array));const f=r?u:h,p=s[t];if(n!==null&&f.has(n))p.push(f.get(n));else{f.set(n,o.position.count),p.push(o.position.count);for(const g in a){const m=o[g],M=g==="normal"||g==="tangent",b=r&&M,x=m.itemSize,[_,E,d]=a[g];bS(_,E,d,e,xo,M,b),Xu(xo,x,m)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){const{groupIndices:a,attributeData:h,forwardIndexMap:u,invertedIndexMap:f}=this;for(;a.length<=r;)a.push(new rl(Uint32Array));const p=o?f:u,g=a[r];if(s!==null&&p.has(s))g.push(p.get(s));else{p.set(s,h.position.count),g.push(h.position.count);const{attributes:m}=t;for(const M in h){const b=h[M],x=m[M];if(!x)throw new Error(`CSG Operations: Attribute ${M} not available on geometry.`);const _=x.itemSize;M==="position"?($e.fromBufferAttribute(x,s).applyMatrix4(e),b.push($e.x,$e.y,$e.z)):M==="normal"?($e.fromBufferAttribute(x,s).applyNormalMatrix(n),o&&$e.multiplyScalar(-1),b.push($e.x,$e.y,$e.z)):M==="tangent"?($e.fromBufferAttribute(x,s).transformDirection(e),o&&$e.multiplyScalar(-1),b.push($e.x,$e.y,$e.z)):(xo.fromBufferAttribute(x,s),Xu(xo,_,b))}}}buildGeometry(t,e){let n=!1;const{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(const f in s){const p=s[f],{type:g,itemSize:m,normalized:M,length:b,count:x}=p,_=p.array.buffer;let E=o[f];(!E||E.count<x||E.array.type!==g)&&(E=new Ze(new g(b),m,M),t.setAttribute(f,E),n=!0),E.array.set(new g(_,0,b),0),E.needsUpdate=!0}const h=r.reduce((f,p)=>p.count+f,0);(!t.index||a.count<h||a.array.type!==Uint32Array)&&(t.setIndex(new Ze(new Uint32Array(h),1)),n=!0),t.clearGroups();let u=0;for(let f=0,p=Math.min(e.length,r.length);f<p;f++){const{index:g,materialIndex:m}=e[f],{count:M}=r[g],b=r[g].array.buffer;M!==0&&(t.index.array.set(new Uint32Array(b,0,M),u),t.addGroup(u,M,m),u+=M)}t.setDrawRange(0,u),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){const{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(const n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}}function AS(i,t){for(const e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function TS(i,t){const e=[];for(let n=0,r=i.length;n<r;n++){const s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function wS(i,t){const e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){const o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function CS(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function qu(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class RS{get useCDTClipping(){return this.triangleSplitter instanceof bu}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new bu:new Cu)}constructor(){this.triangleSplitter=new Cu,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new mS}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new Fo){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,geometryBuilders:a,attributes:h,useGroups:u,consolidateGroups:f,removeUnusedMaterials:p,debug:g}=this;for(;a.length<r.length;)a.push(new ES);r.forEach((d,l)=>{a[l].initFromGeometry(t.geometry,h),AS(d.geometry,h)}),g.init(),_S(t,e,n,o,a,{useGroups:u}),g.complete();const m=this.getGroupRanges(t.geometry),M=qu(m,t.material),b=this.getGroupRanges(e.geometry),x=qu(b,e.material);b.forEach(d=>d.materialIndex+=M.length);const _=[...M,...x];let E=[...m,...b].map((d,l)=>({...d,index:l}));return u?u&&f&&(E=TS(E,_),E.sort((d,l)=>d.materialIndex-l.materialIndex)):E=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((d,l)=>{const y=d.geometry;a[l].buildGeometry(y,E),t.matrixWorld.decompose(d.position,d.quaternion,d.scale),d.updateMatrix(),d.matrixWorld.copy(t.matrixWorld),u?(d.material=_,f&&CS(y.groups),p&&(d.material=wS(y.groups,_))):d.material=_[0]}),s?r:r[0]}evaluateHierarchy(t,e=new Fo){t.updateMatrixWorld(!0);const n=(s,o)=>{const a=s.children;for(let h=0,u=a.length;h<u;h++){const f=a[h];f.isOperationGroup?n(f,o):o(f)}},r=s=>{const o=s.children;let a=!1;for(let u=0,f=o.length;u<f;u++){const p=o[u];a=r(p)||a}const h=s.isDirty();if(h&&s.markUpdated(),a&&!s.isOperationGroup){let u;return n(s,f=>{u?u=this.evaluate(u,f,f.operation):u=this.evaluate(s,f,f.operation)}),s._cachedGeometry=u.geometry,s._cachedMaterials=u.material,!0}else return a||h};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const bn=new xp;bn.background=new ie(1193046);const xi=new cn(75,window.innerWidth/window.innerHeight,.1,1e3);xi.position.z=1.5;xi.position.y=1;const PS=document.getElementById("threeJsCanvas"),Wi=new sv({canvas:PS});Wi.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Wi.domElement);window.addEventListener("resize",()=>{xi.aspect=window.innerWidth/window.innerHeight,xi.updateProjectionMatrix(),Wi.setSize(window.innerWidth,window.innerHeight),Wi.render(bn,xi)});const Ue=.5,dn=.5,DS=.05,ys=new qi(Ue,dn,DS),LS=new Fo(ys),Fc=new qi(.2,.3,.2),IS=new Fo(Fc),Yo=new Lf,US=new RS,wn=US.evaluate(LS,IS,Jf);wn.material=new Lf({flatShading:!0});wn.position.z=-Ue/2;const Bo=new Ne(ys,Yo);Bo.position.z=Ue/2;const Cn=new Ne(ys,Yo);Cn.rotation.y=Math.PI/2;Cn.position.x=Ue*dn;const gs=new Ne(ys,Yo);gs.rotation.y=Math.PI/2;gs.position.x=-Ue*dn;const ms=new Ne(ys,Yo);ms.rotation.x=Math.PI/2;ms.position.y=-Ue*dn;Fc.translate(-.1,-.3,-.2);const Or=new Ne(Fc,new ko({color:16776960}));Or.position.z=-Ue/2;Or.position.x=.1;Or.position.y=.3;Or.scale.z=.05;const Zo=.05,NS=.1,FS={depth:Ue-Zo},Ss=new wf;Ss.moveTo(Ue/2-Zo,dn/2);Ss.lineTo(0,dn/2+NS);Ss.lineTo(-Ue/2+Zo,dn/2);Ss.lineTo(Ue/2-Zo,dn/2);const OS=new Ac(Ss,FS),BS=new ko({color:16755200}),zo=new Ne(OS,BS);zo.position.z=-Ue/2;bn.add(wn);bn.add(Bo);bn.add(Cn);bn.add(gs);bn.add(ms);bn.add(Or);bn.add(zo);const nd=new wc,id=nd.addFolder("Resize");id.add(wn.scale,"x",.25,2);id.add(Cn.scale,"x",.25,2);const zS=nd.addFolder("Swing door");zS.add(Or.rotation,"y",0,Math.PI/2);const VS=new av(xi,Wi.domElement);VS.addEventListener("change",function(){Wi.render(bn,xi)});function rd(){requestAnimationFrame(rd),Bo.scale.x=wn.scale.x,Cn.position.x=wn.scale.x*Ue*dn,gs.position.x=-wn.scale.x*Ue*dn,ms.scale.x=wn.scale.x,zo.scale.x=wn.scale.x,gs.scale.x=Cn.scale.x,wn.position.z=-Cn.scale.x*Ue*dn,Bo.position.z=Cn.scale.x*Ue*dn,ms.scale.y=Cn.scale.x,zo.scale.y=Cn.scale.x,Wi.render(bn,xi)}rd();
