#!/usr/bin/env bash
#
# Fetch the awarded CfT catalogues from the government open data portal and
# convert them into a format d3.js can understand.  LibreOffice is required.

URLS=(
    "/C963DFBA28313385C2257FBC003EEF5F/\$file/Awarded_CfTs_2009_2012_.xls"
    "/411E34AB661F7986C2257FBC0041004D/\$file/Awarded_CfTs_2013_2015_.xls"
    "/45EC9CB986CF6C27C2257FBC00417434/\$file/Awarded_CfTs_Jan-May%202016.xls"
)

cd data || exit
wget "${URLS[@]/#/http://www.data.gov.cy/mof/papd/dataportal/dataportal.nsf/}"
if [[ $? -eq 0 ]]
then
    find ./*.xls -exec \
        soffice --convert-to "csv:Text - txt - csv (StarCalc):44,34,UTF8" "{}" \;
fi
