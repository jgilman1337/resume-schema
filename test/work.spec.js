var test = require("tape");
var { validate } = require("../validator");
const fixtures = require("./__test__/work.json");

test("work - valid", (t) => {
  validate(fixtures.workValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work - invalid", (t) => {
  validate(fixtures.workInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("work[].name - valid", (t) => {
  validate(fixtures.nameValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].name - invalid", (t) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("work[].location - valid", (t) => {
  validate(fixtures.locationValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].location - invalid", (t) => {
  validate(fixtures.locationInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("work[].description - valid", (t) => {
  validate(fixtures.descriptionValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].description - invalid", (t) => {
  validate(fixtures.descriptionInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("work[].position - valid", (t) => {
  validate(fixtures.positionValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].position - invalid", (t) => {
  validate(fixtures.positionInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("work[].url - valid", (t) => {
  validate(fixtures.urlValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].url - invalid", (t) => {
  validate(fixtures.urlInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("work[].dates - valid [YYYY-MM-DD]", (t) => {
  validate(fixtures.datesValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].dates - valid [YYYY-MM]", (t) => {
  validate(fixtures.datesValid2, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].dates - valid [YYYY]", (t) => {
  validate(fixtures.datesValid3, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].dates - valid [multiple ranges]", (t) => {
  validate(fixtures.datesValid4, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].dates - invalid", (t) => {
  validate(fixtures.datesInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("work[].dates endDate - valid [YYYY-MM-DD]", (t) => {
  validate(fixtures.datesEndDateValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].dates endDate - valid [YYYY-MM]", (t) => {
  validate(fixtures.datesEndDateValid2, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].dates endDate - valid [YYYY]", (t) => {
  validate(fixtures.datesEndDateValid3, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].dates endDate - invalid", (t) => {
  validate(fixtures.datesEndDateInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("work[].startDate - valid [YYYY-MM-DD]", (t) => {
  validate(fixtures.startDateValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].startDate - valid [YYYY-MM]", (t) => {
  validate(fixtures.startDateValid2, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].startDate - valid [YYYY]", (t) => {
  validate(fixtures.startDateValid3, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].startDate - invalid", (t) => {
  validate(fixtures.startDateInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("work[].endDate - valid [YYYY-MM-DD]", (t) => {
  validate(fixtures.endDateValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].endDate - valid [YYYY-MM]", (t) => {
  validate(fixtures.endDateValid2, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].endDate - valid [YYYY]", (t) => {
  validate(fixtures.endDateValid3, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].endDate - invalid", (t) => {
  validate(fixtures.endDateInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("work[].summary - valid", (t) => {
  validate(fixtures.summaryValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].summary - invalid", (t) => {
  validate(fixtures.summaryInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("work[].highlights - valid", (t) => {
  validate(fixtures.highlightsValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].highlights - invalid", (t) => {
  validate(fixtures.highlightsInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("work[].highlights[item] - valid", (t) => {
  validate(fixtures.highlightsItemValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("work[].highlights[item] - invalid", (t) => {
  validate(fixtures.highlightsItemInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});
