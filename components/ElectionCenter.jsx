import React, { useContext, useEffect, useState } from "react";

import ElectionDate from "./ElectionDate";

import WhatElseWeOffer from "./WhatElseWeOffer";

export default function ElectionCenter({ stateName, dates, pollingLocations, stateDetails, contests }) {
  return (
    <>
      <ElectionDate pollingLocations={pollingLocations} stateDetails={stateDetails} contests={contests} stateName={stateName} data={dates} />
      <WhatElseWeOffer stateName={stateName} />
    </>
  );
}
