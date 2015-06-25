var rules = require('maxant-rules');
var Rule = rules.Rule;
var Engine = rules.Engine;
var NoActionFoundException = rules.NoActionFoundException;
var DuplicateNameException = rules.DuplicateNameException;
var SubRule = rules.SubRule;
var ParseException = rules.ParseException;
var NoMatchingRuleFoundException = rules.NoMatchingRuleFoundException;

var r1 = new Rule('YouthTarif', 'input.person.age < 26', 'YT2011', 3, 'ch.maxant.someapp.tarifs');
var r2 = new Rule('SeniorTarif', 'input.person.age > 59', 'ST2011', 3, 'ch.maxant.someapp.tarifs');
var r3 = new Rule('DefaultTarif', '!#YouthTarif && !#SeniorTarif', 'DT2011', 3, 'ch.maxant.someapp.tarifs');
var r4 = new Rule('LoyaltyTarif', '#DefaultTarif && input.account.ageInMonths > 24', 'LT2011', 4, 'ch.maxant.someapp.tarifs');
var rules = [r1, r2, r3, r4];

var engine = new Engine(rules);

var request = {person: {name: 'p', age: 24}, account: {ageInMonths: 5}};
var tarif = engine.getBestOutcome(request);
