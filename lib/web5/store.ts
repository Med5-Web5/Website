import { Web5 } from "@web5/api";

///interfaces

type Dosage = {
	nameOfDrugs: string;
	dosage: string;
};

interface IPrescription {
	id?: string;
	doctorDID: string;
	patientDID: string;
	allergies: string[];
	symtoms: string[];
	prescription: Dosage[];
	reasonForPrescription: string;
	howToUse: string;
	verifiablePrescriptionQRCode?: string;
}

interface IDoctor {
	id?: string;
	name: string;
	surname: string;
	expertise: string;
	hospitalOfResidence: string;
	certificate: string; //base64 encoded certificate
}

const PRESCRIPTION_SCHEMA = "http://med5.com/Prescriptions";
const DOCTORS_SCHEMA = "http://med5.com/doctors";

/**
 * Web5 Prescriptions Store -
 */
export class PrescriptionsStore {
	constructor(public web5: Web5) {}

	public getPrescriptions = async (): Promise<IPrescription[]> => {
		const { records } = await this.web5.dwn.records.query({
			message: {
				filter: {
					schema: PRESCRIPTION_SCHEMA,
				},
				dateSort: "createdAscending" as any,
			},
		});

		if (!records) {
			throw new Error("Fail to load Web5 Prescriptions records");
		}

		const prescriptions = [];

		for (const record of records) {
			const data = await record.data.json();
			const prescription = { ...data, id: record.id };
			prescriptions.push(prescription);
		}

		return prescriptions;
	};

	public createPrescription = async (prescription: IPrescription) => {
		// Create the record in the DWN
		const { record } = await this.web5.dwn.records.create({
			data: prescription,
			message: {
				schema: PRESCRIPTION_SCHEMA,
				dataFormat: "application/json",
			},
		});

		if (!record) {
			throw new Error("Fail to create web5 Prescription record");
		}

		await record.data.json();

		return { ...prescription, id: record.id };
	};

	public updatePrescription = async (prescription: IPrescription) => {
		if (!prescription.id) {
			throw new Error("Invalid DWN Record id to be updated");
		}

		// Get record from the DWN
		const { record } = await this.web5.dwn.records.read({
			message: {
				filter: {
					recordId: prescription.id,
				},
			},
		});

		// Update the record in the DWN
		await record.update({ data: prescription });
	};

	public removePrescription = async (id: string) => {
		await this.web5.dwn.records.delete({
			message: {
				recordId: id,
			},
		});
	};
}

/**
 * Web5 Doctors Profile Store -
 */
export class DoctorsProfileStore {
	constructor(public web5: Web5) {}

	public getDoctors = async (): Promise<IDoctor[]> => {
		const { records } = await this.web5.dwn.records.query({
			message: {
				filter: {
					schema: DOCTORS_SCHEMA,
				},
				dateSort: "createdAscending" as any,
			},
		});

		if (!records) {
			throw new Error("Fail to load Web5 doctors records");
		}

		const doctors = [];

		for (const record of records) {
			const data = await record.data.json();
			const doctor = { ...data, id: record.id };
			doctors.push(doctor);
		}

		return doctors;
	};

	public createDoctorsProfile = async (doctor: IDoctor) => {
		// Create the record in the DWN
		const { record } = await this.web5.dwn.records.create({
			data: doctor,
			message: {
				schema: DOCTORS_SCHEMA,
				dataFormat: "application/json",
			},
		});

		if (!record) {
			throw new Error("Fail to create web5 doctors record");
		}

		await record.data.json();

		return { ...doctor, id: record.id };
	};

	public updateDoctor = async (doctor: IDoctor) => {
		if (!doctor.id) {
			throw new Error("Invalid DWN Record id to be updated");
		}

		// Get record from the DWN
		const { record } = await this.web5.dwn.records.read({
			message: {
				filter: {
					recordId: doctor.id,
				},
			},
		});

		// Update the record in the DWN
		await record.update({ data: doctor });
	};

	public removedDoctor = async (id: string) => {
		await this.web5.dwn.records.delete({
			message: {
				recordId: id,
			},
		});
	};
}
