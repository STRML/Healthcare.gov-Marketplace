function getDocumentsForInconsistency(a){var b=[];
if("qe1"===a){b=getQE1Documents()
}return b
}function getQE1Documents(){var a=["124","6"];
return a
}function parseInconsistencyCodeFromRBK(b){var a="";
if(!isEmpty(b)){a=b.split(".");
a=a[5]
}return a
};