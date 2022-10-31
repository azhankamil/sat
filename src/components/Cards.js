export default function Cards() {
  const batt = () => 80 + Math.floor(Math.random() * 20);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg m-4">
      <div className="px-1 py-2 sm:px-6">
        <h3 className="text-sm font-medium text-gray-900">Solar Panel</h3>
      </div>

      <div className="border-t border-gray-200 grid grid-rows-6 grid-flow-col pr-4 bg-gray-50">
        <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="text-sm font-medium text-gray-500">SP1</div>
          <div className="mt-1 w-full text-xs text-gray-900 sm:col-span-2 sm:mt-0">
            <div class=" bg-black-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: batt() }}
              ></div>
            </div>
            <div className=" flex justify-between flex-row">
              <div className="text-xs font-small justify-self-end">0.0A</div>
              <div className="text-xs font-small ">1.5A</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="text-sm font-medium text-gray-500">SP2</div>
          <div className="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: batt() }}
              ></div>
              <div className="text-xs font-small ">0.0A - 1.5A</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="text-sm font-medium text-gray-500">SP3</div>
          <div className="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: batt() }}
              ></div>
              <div className="text-xs font-small ">0.0A - 1.5A</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="text-sm font-medium text-gray-500">SP4</div>
          <div className="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: batt() }}
              ></div>
              <div className="text-xs font-small ">0.0A - 1.5A</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="text-sm font-medium text-gray-500">SP5</div>
          <div className="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: batt() }}
              ></div>
              <div className="text-xs font-small ">0.0A - 1.5A</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="text-sm font-medium text-gray-500">SP6</div>
          <div className="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: batt() }}
              ></div>
              <div className="text-xs font-small ">0.0A - 1.5A</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="text-sm font-medium text-gray-500">SP7</div>
          <div className="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: batt() }}
              ></div>
              <div className="text-xs font-small ">0.0A - 1.5A</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="text-sm font-medium text-gray-500">SP8</div>
          <div className="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: batt() }}
              ></div>
              <div className="text-xs font-small ">0.0A - 1.5A</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="text-sm font-medium text-gray-500">SP9</div>
          <div className="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: batt() }}
              ></div>
              <div className="text-xs font-small ">0.0A - 1.5A</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="text-sm font-medium text-gray-500">SP10</div>
          <div className="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: batt() }}
              ></div>
              <div className="text-xs font-small ">0.0A - 1.5A</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="text-sm font-medium text-gray-500">SP11</div>
          <div className="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: batt() }}
              ></div>
              <div className="text-xs font-small ">0.0A - 1.5A</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
