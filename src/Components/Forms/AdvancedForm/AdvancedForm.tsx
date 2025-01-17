import React, { useState } from 'react';
import styles from './AdvancedForm.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Card, Col, Row, Form } from 'react-bootstrap';
import Select from 'react-select';
import { Single, disabled, Inline, multiDisabled, MultiDropdown, Groupeddata, multi } from './Data/FormAdvancedData';
import { MultiSelect } from "react-multi-select-component";
import makeAnimated from "react-select/animated";
import Creatable from "react-select/creatable";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import Files from 'react-files'
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const AdvancedForm = () => {

	//Multi Select
	const [selected, setSelected] = useState([]);
	const [selected1, setSelected1] = useState([]);
	const [selected2, setSelected2] = useState([]);

	//Multi Select Items
	const animatedComponents = makeAnimated();

	//Group Multi Selected Items
	const [Multi, setMulti] = useState<any>([]);

	const handleChange = (files) => {
		console.log(files)
	}

	const handleError = (error, file) => {
		console.log('error code ' + error.code + ': ' + error.message)
	}

	//file pond dependency plugins
	registerPlugin(
		FilePondPluginImagePreview,
		FilePondPluginImageExifOrientation,
	);

	const [filespond, setfilespond] = useState<any>([]);

	const uploader = Uploader({
		// Get production API keys from Upload.io
		apiKey: "free"
	});

	return (

		<div className={styles.AdvancedForm}>
			<Pageheader titles="Forms" active="Advanced-Forms" />


			<Row>
				<Col lg={6} md={12} className="">
					<Card>
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Single Select Style</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted ">First import a latest version of Select2 in your page. Then the Select2.sumoselect.min.js and its css (sumoselect.css)</Card.Subtitle>
							</div>
							<div className="mb-4">
								<p className="mg-b-10">Single Select</p>
								<Select classNamePrefix="Select-sm" options={Single} placeholder='Volvo' />
							</div>
							<div className="mb-4">
								<p className="mg-b-10">Disabled Select</p>
								<Select classNamePrefix="Select-sm" options={disabled} placeholder='Volvo' isDisabled />
							</div>
							<div>
								<p className="mg-b-10">Inline Select</p>
								<Select classNamePrefix="Select-sm" options={Inline} placeholder='Volvo' />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} md={12}>
					<Card>
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Multiple Select Styles</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted ">First import a latest version of multiselect in your page. Then the multiselect.sumoselect.min.js and its css (sumoselect.css)</Card.Subtitle>
							</div>
							<div className="mb-4">
								<p className="mg-b-10">Multiple Select</p>
								<MultiSelect options={multi} value={selected} onChange={setSelected} labelledBy="Volvo" disableSearch={false} />
							</div>
							<div className="mb-4">
								<p className="mg-b-10">Disabled Select</p>
								<MultiSelect options={multiDisabled} value={selected1} onChange={setSelected1} labelledBy="Volvo" disabled />
							</div>
							<div>
								<p className="mg-b-10">Optgroup Support</p>
								<MultiSelect options={multiDisabled} value={selected2} onChange={setSelected2} labelledBy="Volvo" />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg={12} md={12}>
					<Card>
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Multiple Select Styles</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted ">First import a latest version of Multiselect in your page. Then the MultiSelect.sumoselect.min.js and its css (sumoselect.css)</Card.Subtitle>
							</div>
							<div className="mb-4">
								<p className="mg-b-10">Multiple Select-1</p>
								<Select closeMenuOnSelect={false} components={animatedComponents} defaultValue={2} isMulti options={MultiDropdown} classNamePrefix="Select-sm" />
							</div>
							<div>
								<p className="mg-b-10">Multiple Select-2</p>
								<Creatable isMulti classNamePrefix="Select-sm" options={Groupeddata} value={Multi} onChange={setMulti} />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row>
				<Col lg={12} md={12}>
					<Card className='file-uploads'>
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">File Upload</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted ">This is a React plugin to create a beautiful file uploader that converts a standard <code>input type="file"</code> into a nice drag & drop zone with previews and custom styles.</Card.Subtitle>
							</div>
							<div className="mb-4 d-lg-flex">
								<Col sm={12} lg={4} className="my-auto" >
									<div className="files">
										<Files
											className='files-dropzone'
											onChange={handleChange}
											onError={handleError}
											accepts={['image/*', 'video/mp4', 'audio/*', '.pdf']}
											multiple
											maxFileSize={10000000}
											minFileSize={0}
											clickable>
											Drop files here or click to upload
										</Files>
									</div>
								</Col>
								<Col sm={12} lg={4} className="mg-t-10 mg-lg-t-0 my-auto upload-attachment">
									<UploadButton uploader={uploader}
										options={{ multi: true }}
										onComplete={files => console.log(files)}>
										{({ onClick }) =>
											<Form.Control className='file_input text-center' onClick={onClick} placeholder='click here and upload attachment' />
										}
									</UploadButton>
								</Col>
								<Col sm={12} lg={4} className="mg-t-10 mg-lg-t-0">
									<FilePond className="filepond circular-filepond" labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
										stylePanelLayout='compact circle' styleLoadIndicatorPosition='center bottom'
										styleButtonRemoveItemPosition='center bottom' />
								</Col>
							</div>
							<div>
								
							</div>
							<div>
								<Form.Label className='mt-3'>Animated file input example</Form.Label>
								<FilePond className='mt-3 mb-3'
									allowMultiple={true}
									maxFiles={10}
									server="/api"
									files={filespond}
									onupdatefiles={setfilespond}
									allowReorder={true}
									labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</div>
	)
};

AdvancedForm.propTypes = {};

AdvancedForm.defaultProps = {};

export default AdvancedForm;
