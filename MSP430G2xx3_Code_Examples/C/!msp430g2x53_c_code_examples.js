var jsonInfo = [
	{
		"MCU"    : "MSP430",
		"Device" : "MSP430G2x53",
		"Filter" : "MSP430G2\\d53"
	}
];

var jsonObjC = [
	{"Source Preview" : "msp430g2x13_ca_01.c",                        "Description" : "Comp_A, Output Reference Voltages on P1.1"},
	{"Source Preview" : "msp430g2x13_ca_02.c",                        "Description" : "Comp_A, Detect Threshold, Set P1.0 if P1.1 > 0.25*Vcc"},
	{"Source Preview" : "msp430g2x13_ca_03.c",                        "Description" : "Comp_A, Simple 2.2V Low Battery Detect"},
	{"Source Preview" : "msp430g2x33_adc10_01.c",                     "Description" : "ADC10, Sample A0, Set P1.0 if A0 > 0.5*AVcc"},
	{"Source Preview" : "msp430g2x33_adc10_02.c",                     "Description" : "ADC10, Sample A1, 1.5V Ref, Set P1.0 if A1 > 0.2V"},
	{"Source Preview" : "msp430g2x33_adc10_03.c",                     "Description" : "ADC10, ADC10, Sample A10 Temp, Set P1.0 if Temp ++ ~2C"},
	{"Source Preview" : "msp430g2x33_adc10_04.c",                     "Description" : "ADC10, ADC10, Sample A1, Signed, Set P1.0 if A1 > 0.5*AVcc"},
	{"Source Preview" : "msp430g2x33_adc10_05.c",                     "Description" : "ADC10, ADC10, Sample A11, Lo_Batt, Set P1.0 if AVcc < 2.3V"},
	{"Source Preview" : "msp430g2x33_adc10_06.c",                     "Description" : "ADC10, ADC10, Output Internal Vref on P1.4 & ADCCLK on P1.3"},
	{"Source Preview" : "msp430g2x33_adc10_07.c",                     "Description" : "ADC10, DTC Sample A1 32x, AVcc, Repeat Single, DCO"},
	{"Source Preview" : "msp430g2x33_adc10_08.c",                     "Description" : "ADC10, ADC10, DTC Sample A1 32x, 1.5V, Repeat Single, DCO"},
	{"Source Preview" : "msp430g2x33_adc10_09.c",                     "Description" : "ADC10, ADC10, DTC Sample A10 32x, 1.5V, Repeat Single, DCO"},
	{"Source Preview" : "msp430g2x33_adc10_10.c",                     "Description" : "ADC10, ADC10, DTC Sample A3-01, AVcc, Single Sequence, DCO"},
	{"Source Preview" : "msp430g2x33_adc10_11.c",                     "Description" : "ADC10, ADC10, Sample A1, 1.5V, TA1 Trig, Set P1.0 if > 0.5V"},
	{"Source Preview" : "msp430g2x33_adc10_12.c",                     "Description" : "ADC10, Sample A7, 1.5V, TA1 Trig, Ultra-Low Pwr"},
	{"Source Preview" : "msp430g2x33_adc10_13.c",                     "Description" : "ADC10, DTC Sample A1 32x, AVcc, TA0 Trig, DCO"},
	{"Source Preview" : "msp430g2x33_adc10_14.c",                     "Description" : "ADC10, DTC Sample A1-0 16x, AVcc, Repeat Seq, DCO"},
	{"Source Preview" : "msp430g2x33_adc10_16.c",                     "Description" : "ADC10, ADC10, DTC Sample A0 -> TA1, AVcc, DCO"},
	{"Source Preview" : "msp430g2x33_adc10_temp.c",                   "Description" : "ADC10, Sample A10 Temp and Convert to oC and oF"},
	{"Source Preview" : "msp430g2xx3_1.c",                            "Description" : "Software Toggle P1.0"},
	{"Source Preview" : "msp430g2xx3_1_vlo.c",                        "Description" : "Software Toggle P1.0, MCLK = VLO/8"},
	{"Source Preview" : "msp430g2xx3_clks.c",                         "Description" : "Basic Clock, Output Buffered SMCLK, ACLK and MCLK/10"},
	{"Source Preview" : "msp430g2xx3_dco_calib.c",                    "Description" : "Basic Clock with preloaded DCO calibration constants "},
	{"Source Preview" : "msp430g2xx3_dco_flashcal.c",                 "Description" : "DCO Calibration Constants Programmer"},
	{"Source Preview" : "msp430g2xx3_flashwrite_01.c",                "Description" : "Flash In-System Programming, Copy SegC to SegD"},
	{"Source Preview" : "msp430g2xx3_LFxtal_nmi.c",                   "Description" : "LFXT1 Oscillator Fault Detection"},
	{"Source Preview" : "msp430g2xx3_lpm3.c",                         "Description" : "Basic Clock, LPM3 Using WDT ISR, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_lpm3_vlo.c",                     "Description" : "Basic Clock, LPM3 Using WDT ISR, VLO ACLK"},
	{"Source Preview" : "msp430g2xx3_nmi.c",                          "Description" : "Basic Clock, Configure RST/NMI as NMI"},
	{"Source Preview" : "msp430g2xx3_P1_01.c",                        "Description" : "Software Poll P1.4, Set P1.0 if P1.4 = 1"},
	{"Source Preview" : "msp430g2xx3_P1_02.c",                        "Description" : "Software Port Interrupt Service on P1.4 from LPM4"},
	{"Source Preview" : "msp430g2xx3_P1_03.c",                        "Description" : "Poll P1 With Software with Internal Pull-up"},
	{"Source Preview" : "msp430g2xx3_P1_04.c",                        "Description" : "P1 Interrupt from LPM4 with Internal Pull-up"},
	{"Source Preview" : "msp430g2xx3_pinosc_01.c",                    "Description" : "Capacitive Touch, Pin Oscillator Method, 1 button"},
	{"Source Preview" : "msp430g2xx3_pinosc_02.c",                    "Description" : "Capacitive Touch, Pin Oscillator Method, 4-buttons"},
	{"Source Preview" : "msp430g2xx3_pinosc_03.c",                    "Description" : "Capacitive Touch, Pin Oscillator Method, 4-buttons, ACLK for CCR"},
	{"Source Preview" : "msp430g2xx3_pinosc_04.c",                    "Description" : "Capacitive Touch, Pin Oscillator Method, 8 buttons, UART"},
	{"Source Preview" : "msp430g2xx3_ta_01.c",                        "Description" : "Timer_A, Toggle P1.0, CCR0 Cont. Mode ISR, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_ta_02.c",                        "Description" : "Timer_A, Toggle P1.0, CCR0 Up Mode ISR, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_ta_03.c",                        "Description" : "Timer_A, Toggle P1.0, Overflow ISR, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_ta_04.c",                        "Description" : "Timer_A, Toggle P1.0, Overflow ISR, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_ta_05.c",                        "Description" : "Timer_A, Toggle P1.0, CCR0 Up Mode ISR, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_ta_06.c",                        "Description" : "Timer_A, Toggle P1.0, CCR1 Cont. Mode ISR, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_ta_07.c",                        "Description" : "Timer_A, Toggle P1.0-2, Cont. Mode ISR, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_ta_08.c",                        "Description" : "Timer_A, Toggle P1.0-2, Cont. Mode ISR, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_ta_10.c",                        "Description" : "Timer_A, Toggle P1.1/TA0, Up Mode, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_ta_11.c",                        "Description" : "Timer_A, Toggle P1.1/TA0, Up Mode, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_ta_13.c",                        "Description" : "Timer_A, Toggle P1.1/TA0, Up/Down Mode, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_ta_14.c",                        "Description" : "Timer_A, Toggle P1.1/TA0, Up/Down Mode, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_ta_16.c",                        "Description" : "Timer_A, PWM TA1-2, Up Mode, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_ta_17.c",                        "Description" : "Timer_A, PWM TA1, Up Mode, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_ta_19.c",                        "Description" : "Timer_A, PWM TA1, Up/Down Mode, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_ta_20.c",                        "Description" : "Timer_A, PWM TA1, Up/Down Mode, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_ta_21.c",                        "Description" : "Timer_A, Normal Timer Mode Input Period and Duty Cycle Measurement"},
	{"Source Preview" : "msp430g2xx3_ta_uart2400.c",                  "Description" : "Timer_A, Ultra-Low Pwr UART 2400 Echo, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_ta_uart9600.c",                  "Description" : "Timer_A, Ultra-Low Pwr Full-duplex UART 9600, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_uscia0_irda_01.c",               "Description" : "USCI_A0 IrDA External Loopback Test, 8MHz SMCLK"},
	{"Source Preview" : "msp430g2xx3_uscia0_irda_02.c",               "Description" : "USCI_A0 IrDA Monitor, 8MHz SMCLK"},
	{"Source Preview" : "msp430g2xx3_uscia0_irda_03.c",               "Description" : "USCI_A0 IrDA Physical Layer Comm, 8MHz SMCLK"},
	{"Source Preview" : "msp430g2xx3_uscia0_spi_09.c",                "Description" : "USCI_A0, SPI 3-Wire Master Incremented Data"},
	{"Source Preview" : "msp430g2xx3_uscia0_spi_10.c",                "Description" : "USCI_A0, SPI 3-Wire Slave Data Echo"},
	{"Source Preview" : "msp430g2xx3_uscia0_uart_01_115k.c",          "Description" : "USCI_A0, 115200 UART Echo ISR, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_uscia0_uart_01_115k_lpm.c",      "Description" : "USCI_A0, 115200 UART Echo ISR, DCO SMCLK, LPM4"},
	{"Source Preview" : "msp430g2xx3_uscia0_uart_01_19200.c",         "Description" : "USCI_A0, 19200 UART Echo ISR, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_uscia0_uart_01_9600.c",          "Description" : "USCI_A0, 9600 UART Echo ISR, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_uscia0_uart_05_9600.c",          "Description" : "USCI_A0, Ultra-Low Pwr UART 9600 Echo ISR, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_uscia0_uart_06_9600.c",          "Description" : "USCI_A0, Ultra-Low Pwr UART 9600 String, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_uscia0_uart_07_9600.c",          "Description" : "USCI_A0, Ultra-Low Pwr UART 9600 RX/TX, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_uscia0_uart_08_9600.c",          "Description" : "USCI_A0, UART 9600 Full-Duplex Transceiver, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_uscib0_i2c_01.c",                "Description" : "USCI_B0 I2C Master to TMP100, Set P1.0 if Temp > 28C"},
	{"Source Preview" : "msp430g2xx3_uscib0_i2c_02.c",                "Description" : "USCI_B0 I2C Master Interface to PCF8574, Read/Write"},
	{"Source Preview" : "msp430g2xx3_uscib0_i2c_03.c",                "Description" : "USCI_B0 I2C Master Interface to DAC8571, Write"},
	{"Source Preview" : "msp430g2xx3_uscib0_i2c_04.c",                "Description" : "USCI_B0 I2C Master RX single bytes from MSP430 Slave"},
	{"Source Preview" : "msp430g2xx3_uscib0_i2c_05.c",                "Description" : "USCI_B0 I2C Slave TX single bytes to MSP430 Master"},
	{"Source Preview" : "msp430g2xx3_uscib0_i2c_06.c",                "Description" : "USCI_B0 I2C Master TX single bytes to MSP430 Slave"},
	{"Source Preview" : "msp430g2xx3_uscib0_i2c_07.c",                "Description" : "USCI_B0 I2C Slave RX single bytes from MSP430 Master"},
	{"Source Preview" : "msp430g2xx3_uscib0_i2c_08.c",                "Description" : "USCI_B0 I2C Master TX multiple bytes to MSP430 Slave"},
	{"Source Preview" : "msp430g2xx3_uscib0_i2c_09.c",                "Description" : "USCI_B0 I2C Slave RX multiple bytes from MSP430 Master"},
	{"Source Preview" : "msp430g2xx3_uscib0_i2c_10.c",                "Description" : "USCI_B0 I2C Master RX multiple bytes from MSP430 Slave"},
	{"Source Preview" : "msp430g2xx3_uscib0_i2c_11.c",                "Description" : "USCI_B0 I2C Slave TX multiple bytes to MSP430 Master"},
	{"Source Preview" : "msp430g2xx3_uscib0_i2c_12.c",                "Description" : "USCI_B0 I2C Master TX/RX multiple bytes from MSP430 Slave with a repeated start in between TX and RX operations."},
	{"Source Preview" : "msp430g2xx3_uscib0_i2c_13.c",                "Description" : "USCI_B0 I2C Slave RX/TX multiple bytes to MSP430 Master"},
	{"Source Preview" : "msp430g2xx3_wdt_01.c",                       "Description" : "WDT, Toggle P1.0, Interval Overflow ISR, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_wdt_02.c",                       "Description" : "WDT, Toggle P1.0, Interval Overflow ISR, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_wdt_04.c",                       "Description" : "WDT+ Failsafe Clock, DCO SMCLK"},
	{"Source Preview" : "msp430g2xx3_wdt_05.c",                       "Description" : "Reset on Invalid Address fetch, Toggle P1.0"},
	{"Source Preview" : "msp430g2xx3_wdt_06.c",                       "Description" : "WDT+ Failsafe Clock, 32kHz ACLK"},
	{"Source Preview" : "msp430g2xx3_wdt_07.c",                       "Description" : "WDT+ periodic reset"}
];

