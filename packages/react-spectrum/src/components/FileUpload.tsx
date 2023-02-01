/*
 * Copyright 2022 Adobe, Inc.
 *
 * Your access and use of this software is governed by the Adobe Customer Feedback Program Terms and Conditions or other Beta License Agreement signed by your employer and Adobe, Inc.. This software is NOT open source and may not be used without one of the foregoing licenses. Even with a foregoing license, your access and use of this file is limited to the earlier of (a) 180 days, (b) general availability of the product(s) which utilize this software (i.e. AEM Forms), (c) January 1, 2023, (d) Adobe providing notice to you that you may no longer use the software or that your beta trial has otherwise ended.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL ADOBE NOR ITS THIRD PARTY PROVIDERS AND PARTNERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import FileUpload from './fileupload/FileUpload';
import {FieldJson, State} from '@aemforms/af-core';
import {useRenderer} from '@aemforms/af-react-renderer';
import React from 'react';
import {baseConvertor, combineConvertors, constraintConvertor, formatedErrorMessage} from '../utils/SpectrumMappers';
import {getFileSizeInBytes} from '@aemforms/af-core';

const mapper = combineConvertors(baseConvertor, constraintConvertor, (a, b) => {
    let val = a.value && ((a.value instanceof Array) ? a.value : [a.value]);
    const errorMessage = formatedErrorMessage(a);
    return {
        isReadOnly : a.readOnly === true,
        isRequired : a.required === true,
        updateFiles : b.dispatchChange,
        maxFileSizeInBytes : getFileSizeInBytes(a.maxFileSize),
        value : val,
        ...(a.type?.endsWith('[]') ? {
            multiple: true
        } : {}),
        accept: a.accept,
        errorMessage,
        // @ts-ignore
        id:a.id
    };
});

const FileUploadWrapper = (props: any) => {
    const handleChange = (files: File[]) => {
        // todo: this can be array of mixed types (ie) Array<File | FileObject>
        props.updateFiles(files);
    };
    return <FileUpload {...props} updateFilesCb={handleChange}/>;
};

const FileUploadComponent = function (originalProps: State<FieldJson>) {
    return useRenderer(originalProps, FileUploadWrapper, mapper, true);
};


export default FileUploadComponent;
