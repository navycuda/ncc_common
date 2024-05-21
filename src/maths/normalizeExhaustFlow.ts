
/** ### Normalize Exhaust Mass Air/Fuel Flow
 * Used to normalize mass air and fuel flow to a consistant
 * value accross different temperatures and pressures to make
 * a reasonable approximate of real turbine load.
 * @param massAirFlow       kg/Min
 * @param massFuelFlow      kg/Min
 * @param exhaustTemp       °C
 * @param exhaustPressure   kPa
 * @returns kg/Min corrected to sea level @ 20°C
 */
export const normalizeExhaustFlow = (
  massAirFlow: number, 
  massFuelFlow: number,
  exhaustTemp: number,
  exhaustPressure: number
):number => {
  exhaustTemp += 273.15;
  const T_std = 293.15;   // Standard temperature in Kelvin 
  const P_std = 101.325;  // Standard pressure in kPa

  const totalMassFlow = massAirFlow + massFuelFlow;
  const normalizedFlow = totalMassFlow * ( exhaustTemp / T_std) * (P_std / exhaustPressure);

  return normalizedFlow;
}