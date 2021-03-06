// (C) 2020 GoodData Corporation
import {
  modifyMeasure,
  newArithmeticMeasure,
  newMeasure,
  modifyAttribute,
  newAttribute,
} from '@gooddata/sdk-model';
import { workspace } from '../constants';
import * as Ldm from './full';

/*
 * This file contains our custom extensions on top of the reference LDM. Things such as arithmetic
 * measure definitions, PoP measure definitions and any custom yet reusable stuff that is useful
 * when testing.
 */

export const numberOfRestaurantsLocalId = 'numberOfRestaurants';
export const averageRestaurantDailyCostsLocalId = 'averageRestaurantDailyCosts';
export const totalCostsLocalId = 'totalCosts';
export const totalSalesLocalId = 'totalSales';
export const franchiseFeesAdRoyaltyLocalId = 'franchiseFeesAdRoyalty';
export const franchiseFeesOngoingRoyaltyLocalId = 'franchiseFeesOngoingRoyalty';
export const franchiseFeesLocalId = 'franchiseFees';
export const franchiseSalesLocalId = 'franchiseSales';
export const franchiseSalesAsPercentageLocalId =
  'franchiseSalesFormattedAsPercentage';
export const franchiseFeesInitialFranchiseFeeLocalId =
  'franchiseFeesInitialFranchiseFee';
export const monthDateLocalId = 'monthDate';
export const averageDailyTotalSalesLocalId = 'averageDailyTotalSales';
export const EmployeeNameLocalId = 'employeeName';
export const LocationNameLocalId = 'locationName';
export const LocationResortLocalId = 'a1';
export const MenuCategoryLocalId = 'menu';
export const LocationStateLocalId = 'locationState';
export const LocationCityLocalId = 'locationCity';
export const quarterDateLocalId = 'quarter';
export const franchiseSalesComputeRatioLocalId = 'franchiseSalesComputeRatio';
export const sumOfNumberLocalId = 'a73e984d10e84156bcca68b5b70f0d2c';
export const nameAttributeLocalId = 'e8e31d6083c44de9b9bcdd84def972f7';

// ===============================================================================================

export const averageRestaurantDailyCostsIdentifier = 'aaQJzQzoeKwZ';
export const EmployeeNameIdentifier = 'label.employee.employeename';
export const totalSalesIdentifier = 'aa7ulGyKhIE5';
export const franchiseFeesTag = 'franchise_fees';
export const yearDateDataSetAttributeIdentifier = 'date.year';
export const totalSalesLocalIdentifier = 'c11c27a0b0314a83bfe5b64ab9de7b89';
export const sumOfNumberIdentifier = 'fact.csv_4dates.number';
export const nameAttributeIdentifier = 'label.csv_4dates.name';

// ===============================================================================================

export const monthDate = modifyAttribute(
  Ldm.DateDatasets.Date.Month.Short,
  (a) => a.alias('Month').localId(monthDateLocalId)
);
export const quarterDate = modifyAttribute(
  Ldm.DateDatasets.Date.Quarter.Default,
  (a) => a.localId(quarterDateLocalId)
);

// export const AvgDailyTotalSales = modifyMeasure(Ldm.$AvgDailyTotalSales, (m) =>
//   m
//     .alias('$ Avg Daily Total Sales')
//     .format('$#,##0')
//     .localId(averageDailyTotalSalesLocalId)
// );

export const arithmeticMeasure = newArithmeticMeasure(
  [totalSalesLocalId, numberOfRestaurantsLocalId],
  'ratio',
  (m) => m.format('#,##0').title('$ Avg Restaurant Sales')
);

export const averageRestaurantDailyCosts = newMeasure(
  averageRestaurantDailyCostsIdentifier,
  (m) => m.format('#,##0').localId(averageRestaurantDailyCostsLocalId)
);

export const sumOfNumber = newMeasure(sumOfNumberIdentifier, (m) =>
  m.aggregation('sum').localId(sumOfNumberLocalId).alias('Sum of Number')
);

export const nameAttribute = newAttribute(nameAttributeIdentifier, (a) =>
  a.localId(nameAttributeLocalId)
);

// ===============================================================================================

export const locationStateAttributeUri = `/gdc/md/${workspace}/obj/2210`;
export const locationStateAttributeCaliforniaUri = `/gdc/md/${workspace}/obj/2210/elements?id=6340116`;
export const monthDateJanuaryUri = `/gdc/md/${workspace}/obj/2071/elements?id=1`;
export const dateDataSetUri = `/gdc/md/${workspace}/obj/2180`;
export const locationNameAttributeUri = `/gdc/md/${workspace}/obj/2204`;
export const locationResortUri = `/gdc/md/${workspace}/obj/2206`;
export const tableInsightViewUri = `/gdc/md/${workspace}/obj/8702`;
export const employeeNameDisplayFormUri = `/gdc/md/${workspace}/obj/2201`;

// ===============================================================================================

export const locationStateAttributeIdentifier =
  'attr.restaurantlocation.locationstate';
export const locationIdAttributeIdentifier =
  'attr.restaurantlocation.locationid';
export const locationCityAttributeIdentifier =
  'attr.restaurantlocation.locationcity';
