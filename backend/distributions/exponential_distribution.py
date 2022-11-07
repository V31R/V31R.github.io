import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class ExponentialDistribution(DistributionTemplate):
    def __init__(self):
        super(ExponentialDistribution, self).__init__('Экспоненциальное распределение')

    def calculate(self, data: pd.Series) -> None:
        self.distribution = np.linspace(stats.expon.ppf(0.01) * data.min(), stats.expon.ppf(0.99) * data.max(), len(data))
        self.__mse__(data)