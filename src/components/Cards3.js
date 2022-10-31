export default function Cards() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg m-4">
      <div className="px-1 py-2 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Health Status
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
            <div className="text- font-medium text-gray-500">ADCS Health</div>
            <div className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <div class="grid grid-rows-2 grid-flow-col gap-2 justify-end">
                <div>Critical</div>
                <div className="h-4 w-4 border-2"></div>
                <div>Ok</div>
                <div className="h-4 w-4 border-2 bg-green-800"></div>
              </div>
            </div>
          </div>
          <div className="bg-white px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
            <div className="text-sm font-medium text-gray-500">
              Payload Health
            </div>
            <div className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <div class="grid grid-rows-2 grid-flow-col gap-2 justify-end">
                <div>Critical</div>
                <div className="h-4 w-4 border-2"></div>
                <div>Ok</div>
                <div className="h-4 w-4 border-2 bg-green-800"></div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
            <div className="text-sm font-medium text-gray-500">EPS Health</div>
            <div className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <div class="grid grid-rows-2 grid-flow-col gap-2 justify-end">
                <div>Critical</div>
                <div className="h-4 w-4 border-2"></div>
                <div>Ok</div>
                <div className="h-4 w-4 border-2 bg-green-800"></div>
              </div>
            </div>
          </div>
          <div className="bg-white px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
            <div className="text-sm font-medium text-gray-500">COM Health</div>
            <div className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <div class="grid grid-rows-2 grid-flow-col gap-2 justify-end">
                <div>Critical</div>
                <div className="h-4 w-4 border-2"></div>
                <div>Ok</div>
                <div className="h-4 w-4 border-2 bg-green-800"></div>
              </div>
            </div>
          </div>
          <div className="bg-white px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
            <div className="text-sm font-medium text-gray-500">
              Beacon Health
            </div>
            <div className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <div class="grid grid-rows-2 grid-flow-col gap-2 justify-end">
                <div>Critical</div>
                <div className="h-4 w-4 border-2"></div>
                <div>Ok</div>
                <div className="h-4 w-4 border-2 bg-green-800"></div>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}
