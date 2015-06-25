var RuleEngine = require('node-rules');

var rules = [{
    "condition": function(R) {
        R.when(this && (this.transactionTotal < 500));
    },
    "consequence": function(R) {
        this.result = false;
        R.stop();
    }
}];

var fact = {
    "name": "user4",
    "application": "MOB2",
    "transactionTotal": 600,
    "cardType": "Credit Card"
};

var R = new RuleEngine(rules);

R.execute(fact, function(result) {
    if (result.result) {
        console.log(result);
        console.log("Payment Accepted");
    } else {
        console.log("Payment Rejected");
    }
});
