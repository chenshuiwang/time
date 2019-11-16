function date(){
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            month = this.buling(month);
            var dat = date.getDate();
            dat = this.buling(dat);
            var day = date.getDay();
            var hour = date.getHours();
            hour = this.buling(hour);
            var minute = date.getMinutes();
            minute = this.buling(minute);
            var seconds = date.getSeconds();
            seconds = this.buling(seconds);
            time = year+'-'+month+'-'+dat+' '+hour+' : '+minute+' : '+seconds;
            return time;
}
 function buling(n){
            if(n < 10){
                n = '0' + n;
            }
            return n;
}