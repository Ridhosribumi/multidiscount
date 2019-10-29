// Copyright (c) 2019, Ridhosribumi and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.ui.form.on("Purchase Receipt", "multilevel_discount_percentage", function(frm) {
    if(frm.doc.multilevel_discount_percentage) {
      var stringsearch = "+",str = frm.doc.multilevel_discount_percentage;
      for(var i=0, count=0; i<str.length; count+=+(stringsearch===str[i++]));
      if(count >= 1){
          var banyak = count;
          var arr = frm.doc.multilevel_discount_percentage.split('+');
          var disco = 100 - ((arr[0]/100) * 100);
          for(var nn=1; nn<=banyak; nn++){
              var disco = disco - ((arr[nn]/100) * disco);
          }
          var sisa = 100 - disco;
      }else{
          var sisa = frm.doc.multilevel_discount_percentage;
      }
      var amt = frm.doc.total * (sisa / 100);
      frm.set_value("additional_discount_percentage", sisa);
      frm.set_value("discount_amount", amt);
    }
})
