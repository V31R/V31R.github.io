import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class StudentsDistribution(DistributionTemplate):
    def __init__(self):
        super(StudentsDistribution, self).__init__('Распределение Стьюдента')

    def calculate(self, data: pd.Series) -> None:
        df = 2.74
        self.distribution = np.linspace(stats.t.ppf(0.01, df) * data.min(), stats.t.ppf(0.99, df) * data.max(), len(data))
        self.__mse__(data)